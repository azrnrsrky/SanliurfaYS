import {spawnSync} from 'node:child_process';
for(const file of ['verify.mjs','verify-ai.mjs','verify-render.mjs']){const r=spawnSync(process.execPath,[file],{stdio:'inherit'});if(r.status!==0)process.exit(r.status||1);}
