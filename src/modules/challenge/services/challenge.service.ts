import { httpRequest } from "@/shared/utils/build-request";
import { IChallengeOrderRequest } from "../interfaces/challenge.interfaces";

export async function getChallenges({
  user_id,
  user_token,
}: {
  user_id: number;
  user_token: string;
}) {
  const { success, data, message } = await httpRequest({
    url: "challenges",
    service: "EXXICAPITAL_CUSTOMER_API",
    headers: {
      user_id,
      user_token,
    },
  });
  return { success, data };
}

export async function getExtensionPacks({
  user_id,
  user_token,
}: {
  user_id: number;
  user_token: string;
}) {
  const { success, data, message } = await httpRequest({
    url: "challenges/extension",
    service: "EXXICAPITAL_CUSTOMER_API",
    headers: {
      user_id,
      user_token,
    },
  });
  return { success, data };
}

export async function getChallengeTimer({
  user_id,
  user_token,
}: {
  user_id: number;
  user_token: string;
}) {
  const { success, data, message } = await httpRequest({
    url: "challenge-timer",
    service: "EXXICAPITAL_CUSTOMER_API",
    headers: {
      user_id,
      user_token,
    },
  });
  return { success, data };
}

export async function order({
  user_id,
  user_token,
  order,
}: {
  user_id: number;
  user_token: string;
  order: IChallengeOrderRequest;
}) {
  const { success, data, message } = await httpRequest({
    url: "challenge-orders",
    service: "EXXICAPITAL_CUSTOMER_API",
    headers: {
      user_id,
      user_token,
    },
    body: order,
    method: "POST",
  });
  return { success, data };
}

export async function getPaidOrders({
  user_id,
  user_token,
}: {
  user_id: number;
  user_token: string;
}) {
  const { success, data, message } = await httpRequest({
    url: "challenge-orders",
    service: "EXXICAPITAL_CUSTOMER_API",
    headers: {
      user_id,
      user_token,
    },
    params: { status: "PAID" },
  });
  return { success, data };
}

//
export async function analizeRules({
  user_id,
  user_token,
}: {
  user_id: number;
  user_token: string;
}) {
  const { success, data, message } = await httpRequest({
    url: "challenge-orders/analize-rules",
    service: "EXXICAPITAL_CUSTOMER_API",
    headers: {
      user_id,
      user_token,
    }
  });
  return { success, data };
}

export async function getOrders({
  user_id,
  user_token,
}: {
  user_id: number;
  user_token: string;
}) {
  const { success, data, message } = await httpRequest({
    url: "challenge-orders",
    service: "EXXICAPITAL_CUSTOMER_API",
    headers: {
      user_id,
      user_token,
    },
    params: { status: "" },
  });
  return { success, data };
}

export async function validateCupon({
  user_id,
  user_token,
  cupon,
}: {
  user_id: number;
  user_token: string;
  cupon: string;
}) {
  const { success, data, message } = await httpRequest({
    url: "challenge-orders/cupon",
    service: "EXXICAPITAL_CUSTOMER_API",
    headers: {
      user_id,
      user_token,
    },
    params: { cupon },
  });
  return { success, data };
}

//
export async function registerEvent({
    user_id,
    user_token,
    order
  }: {
    user_id: number;
    user_token: string;
    order: any;
  }) {
    const { success, data, message } = await httpRequest({
      url: "cchallenge-orders/register-event",
      service: "EXXICAPITAL_CUSTOMER_API",
      headers: {
        user_id,
        user_token,
      },
      body: order
    });
    return { success, data };
  }