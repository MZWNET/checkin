import { rainyunKey } from "./env.ts";
import { rainyunPocketMoneyResultType } from "./types/rainyun-pocket-money.type.ts";

const getPocketMoney = async (key: string) => {
  const pocketMoneyResult: rainyunPocketMoneyResultType = await fetch(
    "https://api.v2.rainyun.com/user/reward/items",
    {
      method: "POST",
      headers: {
        "x-api-key": key,
      },
      body: JSON.stringify({
        "item_id": 247,
      }),
    },
  ).then((res) => res.json());
  console.log(JSON.stringify(pocketMoneyResult));
};

getPocketMoney(rainyunKey);

export { getPocketMoney as getRainyunPocketMoney };
