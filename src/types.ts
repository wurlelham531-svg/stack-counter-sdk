export interface ContractIdentifier {
  address: string;
  name: string;
}

export interface CounterState {
  name: string;
  value: number;
  lastUpdatedBy: string | null;
  lastUpdatedAt: number;
}

export interface TxOptions {
  fee?: number;
  nonce?: number;
  postConditions?: unknown[];
}
