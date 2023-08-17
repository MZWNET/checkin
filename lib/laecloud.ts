import { laecloudCookie, userAgent } from "./env.ts";

const url = "https://stack.laecloud.com/includes/func/dailySign.php",
  origin = "https://stack.laecloud.com",
  referer = "https://stack.laecloud.com/clientarea.php";

const checkin = async (cookie: string) => {
  const checkin = await fetch(url, {
    method: "POST",
    headers: {
      cookie: cookie,
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Origin: origin,
      Referer: referer,
      "User-Agent": userAgent,
    },
    body: "tkval=rZubYKecMxdW",
  }).then((res) => res.text());

  if (
    checkin ===
      '您好像没有未支付的账单哦。请尝试 <a href="cart.php">下单一个</a>。'
  ) console.log("莱云签到失败，没有未支付的账单");
  else console.log(checkin);
};

checkin(laecloudCookie);

export { checkin as laecloudCheckin };
