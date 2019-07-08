import Logger from './Logger'
import * as fs from 'fs'
import {promisify} from 'util'

const log = Logger.get('utils')
const lstat = promisify(fs.lstat)

const run = async (func: Function): Promise<void> => {
  try {
    await func()
  } catch (err) {
    log.error(`Run ${err}`)
  }
}

const isFile = async (path: string): Promise<boolean> => {
  try {
    const stats = await lstat(path);
    return stats.isFile()
  } catch (error) { }
  return false
}

export const Utils = {
  run,
  isFile
}
export default Utils
