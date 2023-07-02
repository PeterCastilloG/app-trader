export interface IChallengeInvoiceRequest {
    challengeOrderId: number
    paymentProcessor: string
    currencyCode: string
    currencyToken: string

}