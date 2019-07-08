import * as yargs from 'yargs'
import * as base from './lib/base'
import CodioCSV from './lib/index'

const args = yargs
  .option('file', {
    alias: 'f',
    type: 'string',
    description: "Source File",
    demand: true
  })
  .option('out', {
    alias: 'o',
    type: 'string',
    description: "Output",
    demand: true
  }).argv;

const main = async () => {
  return CodioCSV.process(args.file, args.out);
}

base.Utils.run(main)
