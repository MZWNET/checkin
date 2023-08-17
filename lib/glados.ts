import { GLaDOSCookie, userAgent } from "./env.ts";
import { GLaDOSCheckinStatus, GLaDOSCheckinType } from "./types/glados.type.ts";

const checkinUrl = "https://glados.one/api/user/checkin",
  statusUrl = "https://glados.one/api/user/status",
  referer = "https://glados.one/console/checkin",
  origin = "https://glados.one",
  data = {
    token: "glados.network",
  };

const checkin = async (cookie: string) => {
  const checkin: GLaDOSCheckinType = await fetch(checkinUrl, {
      method: "POST",
      headers: {
        cookie: cookie,
        referer: referer,
        origin: origin,
        "user-agent": userAgent,
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json()),
    status: GLaDOSCheckinStatus = await fetch(statusUrl, {
      headers: {
        cookie: cookie,
        referer: referer,
        origin: origin,
        "user-agent": userAgent,
      },
    }).then((res) => res.json());

  if (checkin.message === "Please Try Tomorrow") {
    console.log(
      `看起来你的GLaDOS账户${status.data.email}已经签到过了，明天再试试吧`,
    );
  } else {
    console.log(
      `GLaDOS账户${status.data.email}签到完成！剩余天数：${status.data.leftDays}天`,
    );
  }
};

checkin(GLaDOSCookie);

export { checkin as GLaDOSCheckin };
