import pino from "pino";
import dayjs from "dayjs";
import PinoPretty from "pino-pretty";

const log = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
  prettifier: PinoPretty,
  timestamp: () => `"time":"${dayjs().format()}"`,
});
export { log };

// log.info("hi");
