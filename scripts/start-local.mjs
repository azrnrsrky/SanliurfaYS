import {existsSync} from 'node:fs';
import {spawn} from 'node:child_process';
import './sites-env.mjs';
const args=['node_modules/wrangler/bin/wrangler.js','dev','--config','dist/server/wrangler.json','--local','--persist-to','.wrangler/state','--ip','127.0.0.1','--inspector-port','0'];
if(existsSync('.dev.vars'))args.push('--env-file','.dev.vars');
const child=spawn(process.execPath,args,{stdio:'inherit'});child.on('exit',code=>process.exit(code||0));
