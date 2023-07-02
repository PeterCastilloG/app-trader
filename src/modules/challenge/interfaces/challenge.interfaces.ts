export interface IChallengeOrderRequest {
  acceptCancelation: boolean;
  acceptTerms: boolean;
  challengeId: number;
  risk: string;
  platform: string;
  currency: string;
  cupon: string;
  orderId?: string;
}

export interface IChallengeOrder {
  title: string;
  challengeOderId: number;
  challengeId: number;
  customerId: number;
  status: string;
  grade: { code: string; message: string };
  createdAt: string;
  updatedAt: string;
  paymentUrl: string;
  mt4AccountLogin: number;
  mt4AccountBalance: number;
  mt4Credentials: string;
  endDate: string;
  startDate: string;
  paymentDate: string;
}
