const workerFunc = async (cookie: string) => {
  import { v2freeCookie } from "./env.ts";
  import { v2freeCheckinType } from "./types/v2free.type.ts";

  const url = "https://w1.v2free.top",
    path = "/user/checkin";

  const checkin: v2freeCheckinType = await fetch(url + path, {
    method: "POST",
    headers: {
      cookie: cookie
    }
  }).then(res => res.json());
  if (checkin.msg === "您似乎已经签到过了...") console.log(`v2free提示：${checkin.msg}`);
  else console.log(`v2free签到结果：${checkin.msg};总流量：${checkin.traffic};今日已用：${checkin.trafficInfo.todayUsedTraffic};过去已用：${checkin.trafficInfo.lastUsedTraffic};剩余流量：${checkin.trafficInfo.unUsedTraffic}`);
};

self.addEventListener("message", (event) => {
  workerFunc(event.data.cookie);
});

export {
  workerFunc as v2freeCheckin
};
