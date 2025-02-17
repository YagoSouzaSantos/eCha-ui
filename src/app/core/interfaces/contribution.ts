export interface Contribution {
  id?: number;
  itemId?: number;
  value: number;
  contributorName?: string;
  contributorEmail?: string;
  message?: string;
  statusContributionId?: number;
  icon?: string;
  isVisible: boolean;
  creationDate?: Date;
  updateDate?: Date;

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
