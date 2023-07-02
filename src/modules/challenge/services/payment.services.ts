import { httpRequest } from "@/shared/utils/build-request";
import { IChallengeInvoiceRequest } from "../interfaces/payment.interfaces";

export async function createInvoice({
  user_id,
  user_token,
  invoice,
}: {
  user_id: number;
  user_token: string;
  invoice: IChallengeInvoiceRequest;
}) {
  const { success, data, message } = await httpRequest({
    url: "challenge-orders/analize-rules",
    service: "EXXICAPITAL_CUSTOMER_API",
    headers: {
      user_id,
      user_token,
    },
    body: invoice,
  });
  return { success, data };
}

export async function verifyPayment({
    user_id,
    user_token,
    invoice,
  }: {
    user_id: number;
    user_token: string;
    invoice: IChallengeInvoiceRequest;
  }) {
    const { success, data, message } = await httpRequest({
      url: "challenge-orders/analize-rules",
      service: "EXXICAPITAL_CUSTOMER_API",
      headers: {
        user_id,
        user_token,
      },
      body: invoice,
    });
    return { success, data };
  }
