import { ikuuuCookie } from "./env.ts";
import { ikuuuCheckinType } from "./types/ikuuu.type.ts";

const url = "https://ikuuu.art",
  path = "/user/checkin";

const checkin = async (cookie: string) => {
  const checkin: ikuuuCheckinType = await fetch(url + path, {
    method: "POST",
    headers: {
      cookie: cookie,
    },
  }).then((res) => res.json());
  console.log(`ikuuu签到结果：${checkin.msg}`);
};

checkin(ikuuuCookie);

export { checkin as ikuuuCheckin };
