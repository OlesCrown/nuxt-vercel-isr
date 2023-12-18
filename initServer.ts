import fs from "fs"
export default defineNitroPlugin((nitroApp) => {
   if((process.env.NODE_ENV || 'development') != 'development')fs.openSync('/tmp/app-initialized', 'w')
})
