interface v2freeCheckinType {
  msg: string;
  unflowtraffic: number;
  traffic: string;
  trafficInfo: {
    todayUsedTraffic: string;
    lastUsedTraffic: string;
    unUsedTraffic: string;
  };
  ret: number;
}

export type { v2freeCheckinType };
