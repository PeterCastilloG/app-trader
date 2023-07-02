import { environment } from "../enviroments";
import { IAppTraderServices } from "../types/appTraderServices";

type HttpMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export const httpRequest = async ({
  url,
  headers,
  method = "GET",
  body,
  params,
  service,
}: {
  url: string;
  headers?: Record<string, any>;
  method?: HttpMethods;
  body?: Record<string, any>;
  params?: Record<string, string>;
  service: IAppTraderServices;
}) => {
  const requestHeaders: Record<string, any> = {
    "Content-Type": "application/json",
  };
  if (headers) {
    Object.keys(headers).forEach((key) => {
      requestHeaders[key] = headers[key];
    });
  }
  if (params) {
    const paramsString = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join("&");
    url = `${url}?${paramsString}`;
  }
  const response = await fetch(`${environment[service]}/${url}`, {
    cache: "no-store",
    method,
    headers: requestHeaders,
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  const { status } = response;
  if (status === 401) {
    window.location.href = "/register";
    return {
      success: false,
      data: { item: {}, items: [] },
      message: "Unauthorized",
    };
  }
  const { success, data, message, token, changePassword, info, applied } =
    await response.json();
  return { success, data, message, token, changePassword, info, applied };
};
