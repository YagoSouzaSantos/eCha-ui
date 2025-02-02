export interface PaymentData {
  method: string;
  amount: number;
  cardDetails?: {
    number: string;
    expiry: string;
    cvv: string;
    holder: string;
    installments: number;
  };
  pixDetails?: {
    payerName: string;
  };
}
