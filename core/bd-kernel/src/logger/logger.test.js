import { Logger } from "./logger.js";

const logger = new Logger();

logger.info("BD Kernel started.");

logger.warn("Repository is empty.");

logger.error("Contract validation failed.");

console.table(logger.getHistory());