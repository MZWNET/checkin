import { rainyunKey } from "./env.ts";
import { rainyunCheckinType } from "./types/rainyun.type.ts";

const checkin = async (key: string) => {
  const checkin: rainyunCheckinType = await fetch("https://api.v2.rainyun.com/user/reward/tasks", {
    method: "POST",
    headers: {
      "x-api-key": key
    },
    body: JSON.stringify({
      task_name: "每日签到"
    })
  }).then(res => res.json());
  if (checkin.code === 30011) console.log("您今天似乎已经签到过雨云了");
  else if (checkin.code === 200 && checkin.data === "ok") console.log(`雨云签到成功！`);
}

checkin(rainyunKey);

export {
  checkin as rainyunCheckin
}