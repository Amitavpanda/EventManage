const pino = require('pino');
const pretty = require('pino-pretty');
import dayjs from 'dayjs';
import path from 'path';

const logger = pino({
  base: { pid: false },
  timestamp: () => `,"time":${dayjs().format()}`,
  prettifier: pretty,
});







export default logger;
