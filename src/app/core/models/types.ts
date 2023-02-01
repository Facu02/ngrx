export interface User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  roleId: number;
  points: number;
}

export interface Account {
  creationDate: Date;
  money: number;
  isBlocked: boolean;
  userId: number;
}

export interface FixedTermDeposit {
  userId: number;
  accountId: number;
  amount: number;
  creation_date: Date;
  closing_date: Date;
}

export interface Role {
  name: string;
  description: string;
}

export interface Transaction {
  amount: number;
  concept: string;
  date: Date;
  type: string;
  accountId: number;
  userId: number;
  to_account_id: number;
}

export interface DepositOrTransfer {
  type: string;
  concept: string;
  amount: number;
}