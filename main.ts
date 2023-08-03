import { Worker } from "deno";
import { GLaDOSCheckin } from "./lib/glados.ts";
import { v2freeCheckin } from "./lib/v2free.ts";
import { ikuuuCheckin } from "./lib/ikuuu.ts";
import { nodeseekCheckin } from "./lib/nodeseek.ts";
import { rainyunCheckin } from "./lib/rainyun.ts";
import { laecloudCheckin } from "./lib/laecloud.ts";

const workers = [
  new Worker(GLaDOSCheckin, { type: "module" }),
  new Worker(v2freeCheckin, { type: "module" }),
  new Worker(ikuuuCheckin, { type: "module" }),
  new Worker(nodeseekCheckin, { type: "module" }),
  new Worker(rainyunCheckin, { type: "module" }),
  new Worker(laecloudCheckin, { type: "module" }),
];

workers.forEach(worker => {
  worker.postMessage({ cookie: "cookie", random: false });
  worker.onerror = (error) => {
    console.error(`Error in worker: ${error.message}`);
    worker.terminate();
  };
});