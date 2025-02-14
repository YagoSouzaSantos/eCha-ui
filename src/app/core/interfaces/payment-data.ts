export interface PaymentData {
  method: string;
  amount: number;
  email: string;
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
