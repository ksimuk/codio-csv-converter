import * as winston from 'winston'

const { combine, timestamp, label, printf, colorize } = winston.format;

const get = (name: string): winston.Logger => {
  const formatCli = combine(
    label({ label: name }),
    colorize(),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    printf(info => `${info.level}(${info.label}) ${info.timestamp} ${info.message}`)
  )
  return winston.createLogger({
    transports: [
      new winston.transports.Console({ format: formatCli })
    ]
  });
}
export const Logger = { get }
export default Logger
