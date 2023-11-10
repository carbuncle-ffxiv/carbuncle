import pino from 'pino';

export const createLogger = (shardId?: string) => {
  return pino({
    level: 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'UTC:yyyy-mm-dd HH:MM:ss',
      },
    },
    base: {
      pid: shardId,
    },
  });
};

export const logger = createLogger();
