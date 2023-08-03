const workerFunc = async (cookie: string, random: boolean) => {
  import { nodeseekCookie, userAgent } from "./env.ts";
  import { nodeseekCheckinType } from "./types/nodeseek.type.ts";

  let checkinBaseUrl = "https://www.nodeseek.com/api/attendance";
  const boardUrl = "https://www.nodeseek.com/api/attendance/board",
    origin = "https://www.nodeseek.com",
    referer = "https://www.nodeseek.com/board"

  if (random) checkinBaseUrl += "?ramdom=true";
  const checkin: nodeseekCheckinType = await fetch(checkinBaseUrl, {
    method: "POST",
    headers: {
      cookie: cookie,
      origin: origin,
      referer: referer,
      "user-agent": userAgent
    }
  }).then(res => res.json());
  fetch(boardUrl, {
    headers: {
      cookie: cookie,
      referer: referer
    }
  });

  if (checkin.success) console.log(`Nodeseek签到成功，${checkin.message}，目前获得的总鸡腿数量为${checkin.current}`);
  else console.log(`Nodeseek签到失败，返回的消息：${checkin.message}`);
}

self.addEventListener("message", (event) => {
  workerFunc(event.data.cookie, event.data.random);
});

export {
  workerFunc as nodeseekCheckin
}