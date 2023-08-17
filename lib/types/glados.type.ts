interface GLaDOSCheckinType {
  code: number;
  message: string;
  list: {
    id: number;
    user_id: number;
    time: number;
    asset: string;
    business: string;
    change: string;
    balance: string;
    detail: string;
  }[];
}

interface GLaDOSCheckinStatus {
  code: number;
  data: {
    code: string;
    domain: string;
    phone: string;
    hashed: string;
    password: string;
    port: number;
    traffic: number;
    site: string;
    userId: number;
    telegram_id: null | string | number;
    vip: number;
    email: string;
    days: number;
    usdt_address: string;
    client_version: string;
    system_time: number;
    system_date: string;
    created_at: number;
    refer_id: number;
    leftDays: string;
  };
}

export type { GLaDOSCheckinStatus, GLaDOSCheckinType };
