module.exports=function(e,t){"use strict";var i={};function __webpack_require__(t){if(i[t]){return i[t].exports}var s=i[t]={i:t,l:false,exports:{}};e[t].call(s.exports,s,s.exports,__webpack_require__);s.l=true;return s.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(131)}return startup()}({1:function(e,t,i){"use strict";var s=this&&this.__awaiter||function(e,t,i,s){function adopt(e){return e instanceof i?e:new i(function(t){t(e)})}return new(i||(i=Promise))(function(i,r){function fulfilled(e){try{step(s.next(e))}catch(e){r(e)}}function rejected(e){try{step(s["throw"](e))}catch(e){r(e)}}function step(e){e.done?i(e.value):adopt(e.value).then(fulfilled,rejected)}step((s=s.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const r=i(129);const n=i(622);const o=i(669);const c=i(672);const u=o.promisify(r.exec);function cp(e,t,i={}){return s(this,void 0,void 0,function*(){const{force:s,recursive:r}=readCopyOptions(i);const o=(yield c.exists(t))?yield c.stat(t):null;if(o&&o.isFile()&&!s){return}const u=o&&o.isDirectory()?n.join(t,n.basename(e)):t;if(!(yield c.exists(e))){throw new Error(`no such file or directory: ${e}`)}const l=yield c.stat(e);if(l.isDirectory()){if(!r){throw new Error(`Failed to copy. ${e} is a directory, but tried to copy without recursive flag.`)}else{yield cpDirRecursive(e,u,0,s)}}else{if(n.relative(e,u)===""){throw new Error(`'${u}' and '${e}' are the same file`)}yield copyFile(e,u,s)}})}t.cp=cp;function mv(e,t,i={}){return s(this,void 0,void 0,function*(){if(yield c.exists(t)){let s=true;if(yield c.isDirectory(t)){t=n.join(t,n.basename(e));s=yield c.exists(t)}if(s){if(i.force==null||i.force){yield rmRF(t)}else{throw new Error("Destination already exists")}}}yield mkdirP(n.dirname(t));yield c.rename(e,t)})}t.mv=mv;function rmRF(e){return s(this,void 0,void 0,function*(){if(c.IS_WINDOWS){try{if(yield c.isDirectory(e,true)){yield u(`rd /s /q "${e}"`)}else{yield u(`del /f /a "${e}"`)}}catch(e){if(e.code!=="ENOENT")throw e}try{yield c.unlink(e)}catch(e){if(e.code!=="ENOENT")throw e}}else{let t=false;try{t=yield c.isDirectory(e)}catch(e){if(e.code!=="ENOENT")throw e;return}if(t){yield u(`rm -rf "${e}"`)}else{yield c.unlink(e)}}})}t.rmRF=rmRF;function mkdirP(e){return s(this,void 0,void 0,function*(){yield c.mkdirP(e)})}t.mkdirP=mkdirP;function which(e,t){return s(this,void 0,void 0,function*(){if(!e){throw new Error("parameter 'tool' is required")}if(t){const t=yield which(e,false);if(!t){if(c.IS_WINDOWS){throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`)}else{throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`)}}}try{const t=[];if(c.IS_WINDOWS&&process.env.PATHEXT){for(const e of process.env.PATHEXT.split(n.delimiter)){if(e){t.push(e)}}}if(c.isRooted(e)){const i=yield c.tryGetExecutablePath(e,t);if(i){return i}return""}if(e.includes("/")||c.IS_WINDOWS&&e.includes("\\")){return""}const i=[];if(process.env.PATH){for(const e of process.env.PATH.split(n.delimiter)){if(e){i.push(e)}}}for(const s of i){const i=yield c.tryGetExecutablePath(s+n.sep+e,t);if(i){return i}}return""}catch(e){throw new Error(`which failed with message ${e.message}`)}})}t.which=which;function readCopyOptions(e){const t=e.force==null?true:e.force;const i=Boolean(e.recursive);return{force:t,recursive:i}}function cpDirRecursive(e,t,i,r){return s(this,void 0,void 0,function*(){if(i>=255)return;i++;yield mkdirP(t);const s=yield c.readdir(e);for(const n of s){const s=`${e}/${n}`;const o=`${t}/${n}`;const u=yield c.lstat(s);if(u.isDirectory()){yield cpDirRecursive(s,o,i,r)}else{yield copyFile(s,o,r)}}yield c.chmod(t,(yield c.stat(e)).mode)})}function copyFile(e,t,i){return s(this,void 0,void 0,function*(){if((yield c.lstat(e)).isSymbolicLink()){try{yield c.lstat(t);yield c.unlink(t)}catch(e){if(e.code==="EPERM"){yield c.chmod(t,"0666");yield c.unlink(t)}}const i=yield c.readlink(e);yield c.symlink(i,t,c.IS_WINDOWS?"junction":null)}else if(!(yield c.exists(t))||i){yield c.copyFile(e,t)}})}},9:function(e,t,i){"use strict";var s=this&&this.__awaiter||function(e,t,i,s){function adopt(e){return e instanceof i?e:new i(function(t){t(e)})}return new(i||(i=Promise))(function(i,r){function fulfilled(e){try{step(s.next(e))}catch(e){r(e)}}function rejected(e){try{step(s["throw"](e))}catch(e){r(e)}}function step(e){e.done?i(e.value):adopt(e.value).then(fulfilled,rejected)}step((s=s.apply(e,t||[])).next())})};var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)if(Object.hasOwnProperty.call(e,i))t[i]=e[i];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const n=r(i(87));const o=r(i(614));const c=r(i(129));const u=r(i(622));const l=r(i(1));const d=r(i(672));const f=process.platform==="win32";class ToolRunner extends o.EventEmitter{constructor(e,t,i){super();if(!e){throw new Error("Parameter 'toolPath' cannot be null or empty.")}this.toolPath=e;this.args=t||[];this.options=i||{}}_debug(e){if(this.options.listeners&&this.options.listeners.debug){this.options.listeners.debug(e)}}_getCommandString(e,t){const i=this._getSpawnFileName();const s=this._getSpawnArgs(e);let r=t?"":"[command]";if(f){if(this._isCmdFile()){r+=i;for(const e of s){r+=` ${e}`}}else if(e.windowsVerbatimArguments){r+=`"${i}"`;for(const e of s){r+=` ${e}`}}else{r+=this._windowsQuoteCmdArg(i);for(const e of s){r+=` ${this._windowsQuoteCmdArg(e)}`}}}else{r+=i;for(const e of s){r+=` ${e}`}}return r}_processLineBuffer(e,t,i){try{let s=t+e.toString();let r=s.indexOf(n.EOL);while(r>-1){const e=s.substring(0,r);i(e);s=s.substring(r+n.EOL.length);r=s.indexOf(n.EOL)}t=s}catch(e){this._debug(`error processing line. Failed with error ${e}`)}}_getSpawnFileName(){if(f){if(this._isCmdFile()){return process.env["COMSPEC"]||"cmd.exe"}}return this.toolPath}_getSpawnArgs(e){if(f){if(this._isCmdFile()){let t=`/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;for(const i of this.args){t+=" ";t+=e.windowsVerbatimArguments?i:this._windowsQuoteCmdArg(i)}t+='"';return[t]}}return this.args}_endsWith(e,t){return e.endsWith(t)}_isCmdFile(){const e=this.toolPath.toUpperCase();return this._endsWith(e,".CMD")||this._endsWith(e,".BAT")}_windowsQuoteCmdArg(e){if(!this._isCmdFile()){return this._uvQuoteCmdArg(e)}if(!e){return'""'}const t=[" ","\t","&","(",")","[","]","{","}","^","=",";","!","'","+",",","`","~","|","<",">",'"'];let i=false;for(const s of e){if(t.some(e=>e===s)){i=true;break}}if(!i){return e}let s='"';let r=true;for(let t=e.length;t>0;t--){s+=e[t-1];if(r&&e[t-1]==="\\"){s+="\\"}else if(e[t-1]==='"'){r=true;s+='"'}else{r=false}}s+='"';return s.split("").reverse().join("")}_uvQuoteCmdArg(e){if(!e){return'""'}if(!e.includes(" ")&&!e.includes("\t")&&!e.includes('"')){return e}if(!e.includes('"')&&!e.includes("\\")){return`"${e}"`}let t='"';let i=true;for(let s=e.length;s>0;s--){t+=e[s-1];if(i&&e[s-1]==="\\"){t+="\\"}else if(e[s-1]==='"'){i=true;t+="\\"}else{i=false}}t+='"';return t.split("").reverse().join("")}_cloneExecOptions(e){e=e||{};const t={cwd:e.cwd||process.cwd(),env:e.env||process.env,silent:e.silent||false,windowsVerbatimArguments:e.windowsVerbatimArguments||false,failOnStdErr:e.failOnStdErr||false,ignoreReturnCode:e.ignoreReturnCode||false,delay:e.delay||1e4};t.outStream=e.outStream||process.stdout;t.errStream=e.errStream||process.stderr;return t}_getSpawnOptions(e,t){e=e||{};const i={};i.cwd=e.cwd;i.env=e.env;i["windowsVerbatimArguments"]=e.windowsVerbatimArguments||this._isCmdFile();if(e.windowsVerbatimArguments){i.argv0=`"${t}"`}return i}exec(){return s(this,void 0,void 0,function*(){if(!d.isRooted(this.toolPath)&&(this.toolPath.includes("/")||f&&this.toolPath.includes("\\"))){this.toolPath=u.resolve(process.cwd(),this.options.cwd||process.cwd(),this.toolPath)}this.toolPath=yield l.which(this.toolPath,true);return new Promise((e,t)=>{this._debug(`exec tool: ${this.toolPath}`);this._debug("arguments:");for(const e of this.args){this._debug(`   ${e}`)}const i=this._cloneExecOptions(this.options);if(!i.silent&&i.outStream){i.outStream.write(this._getCommandString(i)+n.EOL)}const s=new ExecState(i,this.toolPath);s.on("debug",e=>{this._debug(e)});const r=this._getSpawnFileName();const o=c.spawn(r,this._getSpawnArgs(i),this._getSpawnOptions(this.options,r));const u="";if(o.stdout){o.stdout.on("data",e=>{if(this.options.listeners&&this.options.listeners.stdout){this.options.listeners.stdout(e)}if(!i.silent&&i.outStream){i.outStream.write(e)}this._processLineBuffer(e,u,e=>{if(this.options.listeners&&this.options.listeners.stdline){this.options.listeners.stdline(e)}})})}const l="";if(o.stderr){o.stderr.on("data",e=>{s.processStderr=true;if(this.options.listeners&&this.options.listeners.stderr){this.options.listeners.stderr(e)}if(!i.silent&&i.errStream&&i.outStream){const t=i.failOnStdErr?i.errStream:i.outStream;t.write(e)}this._processLineBuffer(e,l,e=>{if(this.options.listeners&&this.options.listeners.errline){this.options.listeners.errline(e)}})})}o.on("error",e=>{s.processError=e.message;s.processExited=true;s.processClosed=true;s.CheckComplete()});o.on("exit",e=>{s.processExitCode=e;s.processExited=true;this._debug(`Exit code ${e} received from tool '${this.toolPath}'`);s.CheckComplete()});o.on("close",e=>{s.processExitCode=e;s.processExited=true;s.processClosed=true;this._debug(`STDIO streams have closed for tool '${this.toolPath}'`);s.CheckComplete()});s.on("done",(i,s)=>{if(u.length>0){this.emit("stdline",u)}if(l.length>0){this.emit("errline",l)}o.removeAllListeners();if(i){t(i)}else{e(s)}});if(this.options.input){if(!o.stdin){throw new Error("child process missing stdin")}o.stdin.end(this.options.input)}})})}}t.ToolRunner=ToolRunner;function argStringToArray(e){const t=[];let i=false;let s=false;let r="";function append(e){if(s&&e!=='"'){r+="\\"}r+=e;s=false}for(let n=0;n<e.length;n++){const o=e.charAt(n);if(o==='"'){if(!s){i=!i}else{append(o)}continue}if(o==="\\"&&s){append(o);continue}if(o==="\\"&&i){s=true;continue}if(o===" "&&!i){if(r.length>0){t.push(r);r=""}continue}append(o)}if(r.length>0){t.push(r.trim())}return t}t.argStringToArray=argStringToArray;class ExecState extends o.EventEmitter{constructor(e,t){super();this.processClosed=false;this.processError="";this.processExitCode=0;this.processExited=false;this.processStderr=false;this.delay=1e4;this.done=false;this.timeout=null;if(!t){throw new Error("toolPath must not be empty")}this.options=e;this.toolPath=t;if(e.delay){this.delay=e.delay}}CheckComplete(){if(this.done){return}if(this.processClosed){this._setResult()}else if(this.processExited){this.timeout=setTimeout(ExecState.HandleTimeout,this.delay,this)}}_debug(e){this.emit("debug",e)}_setResult(){let e;if(this.processExited){if(this.processError){e=new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`)}else if(this.processExitCode!==0&&!this.options.ignoreReturnCode){e=new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`)}else if(this.processStderr&&this.options.failOnStdErr){e=new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`)}}if(this.timeout){clearTimeout(this.timeout);this.timeout=null}this.done=true;this.emit("done",e,this.processExitCode)}static HandleTimeout(e){if(e.done){return}if(!e.processClosed&&e.processExited){const t=`The STDIO streams did not close within ${e.delay/1e3} seconds of the exit event from process '${e.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;e._debug(t)}e._setResult()}}},87:function(e){e.exports=require("os")},129:function(e){e.exports=require("child_process")},131:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:true});const s=i(470);const r=i(986);const n=`\ncurl -sfL https://get.k3s.io | sh -s - --write-kubeconfig-mode 644;\nmkdir ~/.kube && cp /etc/rancher/k3s/k3s.yaml ~/.kube/config;\n`;try{if(process.platform!=="linux"){throw new Error("Only Linux supported for now")}r.exec("bash",["-c",n])}catch(e){s.setFailed(e.message)}},357:function(e){e.exports=require("assert")},431:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:true});const s=i(87);function issueCommand(e,t,i){const r=new Command(e,t,i);process.stdout.write(r.toString()+s.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const r="::";class Command{constructor(e,t,i){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=i}toString(){let e=r+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";for(const t in this.properties){if(this.properties.hasOwnProperty(t)){const i=this.properties[t];if(i){e+=`${t}=${escape(`${i||""}`)},`}}}}e+=r;const t=`${this.message||""}`;e+=escapeData(t);return e}}function escapeData(e){return e.replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escape(e){return e.replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/]/g,"%5D").replace(/;/g,"%3B")}},470:function(e,t,i){"use strict";var s=this&&this.__awaiter||function(e,t,i,s){function adopt(e){return e instanceof i?e:new i(function(t){t(e)})}return new(i||(i=Promise))(function(i,r){function fulfilled(e){try{step(s.next(e))}catch(e){r(e)}}function rejected(e){try{step(s["throw"](e))}catch(e){r(e)}}function step(e){e.done?i(e.value):adopt(e.value).then(fulfilled,rejected)}step((s=s.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const r=i(431);const n=i(87);const o=i(622);var c;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(c=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){process.env[e]=t;r.issueCommand("set-env",{name:e},t)}t.exportVariable=exportVariable;function setSecret(e){r.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){r.issueCommand("add-path",{},e);process.env["PATH"]=`${e}${o.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const i=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!i){throw new Error(`Input required and not supplied: ${e}`)}return i.trim()}t.getInput=getInput;function setOutput(e,t){r.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setFailed(e){process.exitCode=c.Failure;error(e)}t.setFailed=setFailed;function debug(e){r.issueCommand("debug",{},e)}t.debug=debug;function error(e){r.issue("error",e)}t.error=error;function warning(e){r.issue("warning",e)}t.warning=warning;function info(e){process.stdout.write(e+n.EOL)}t.info=info;function startGroup(e){r.issue("group",e)}t.startGroup=startGroup;function endGroup(){r.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return s(this,void 0,void 0,function*(){startGroup(e);let i;try{i=yield t()}finally{endGroup()}return i})}t.group=group;function saveState(e,t){r.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},614:function(e){e.exports=require("events")},622:function(e){e.exports=require("path")},669:function(e){e.exports=require("util")},672:function(e,t,i){"use strict";var s=this&&this.__awaiter||function(e,t,i,s){function adopt(e){return e instanceof i?e:new i(function(t){t(e)})}return new(i||(i=Promise))(function(i,r){function fulfilled(e){try{step(s.next(e))}catch(e){r(e)}}function rejected(e){try{step(s["throw"](e))}catch(e){r(e)}}function step(e){e.done?i(e.value):adopt(e.value).then(fulfilled,rejected)}step((s=s.apply(e,t||[])).next())})};var r;Object.defineProperty(t,"__esModule",{value:true});const n=i(357);const o=i(747);const c=i(622);r=o.promises,t.chmod=r.chmod,t.copyFile=r.copyFile,t.lstat=r.lstat,t.mkdir=r.mkdir,t.readdir=r.readdir,t.readlink=r.readlink,t.rename=r.rename,t.rmdir=r.rmdir,t.stat=r.stat,t.symlink=r.symlink,t.unlink=r.unlink;t.IS_WINDOWS=process.platform==="win32";function exists(e){return s(this,void 0,void 0,function*(){try{yield t.stat(e)}catch(e){if(e.code==="ENOENT"){return false}throw e}return true})}t.exists=exists;function isDirectory(e,i=false){return s(this,void 0,void 0,function*(){const s=i?yield t.stat(e):yield t.lstat(e);return s.isDirectory()})}t.isDirectory=isDirectory;function isRooted(e){e=normalizeSeparators(e);if(!e){throw new Error('isRooted() parameter "p" cannot be empty')}if(t.IS_WINDOWS){return e.startsWith("\\")||/^[A-Z]:/i.test(e)}return e.startsWith("/")}t.isRooted=isRooted;function mkdirP(e,i=1e3,r=1){return s(this,void 0,void 0,function*(){n.ok(e,"a path argument must be provided");e=c.resolve(e);if(r>=i)return t.mkdir(e);try{yield t.mkdir(e);return}catch(s){switch(s.code){case"ENOENT":{yield mkdirP(c.dirname(e),i,r+1);yield t.mkdir(e);return}default:{let i;try{i=yield t.stat(e)}catch(e){throw s}if(!i.isDirectory())throw s}}}})}t.mkdirP=mkdirP;function tryGetExecutablePath(e,i){return s(this,void 0,void 0,function*(){let s=undefined;try{s=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(s&&s.isFile()){if(t.IS_WINDOWS){const t=c.extname(e).toUpperCase();if(i.some(e=>e.toUpperCase()===t)){return e}}else{if(isUnixExecutable(s)){return e}}}const r=e;for(const n of i){e=r+n;s=undefined;try{s=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(s&&s.isFile()){if(t.IS_WINDOWS){try{const i=c.dirname(e);const s=c.basename(e).toUpperCase();for(const r of yield t.readdir(i)){if(s===r.toUpperCase()){e=c.join(i,r);break}}}catch(t){console.log(`Unexpected error attempting to determine the actual case of the file '${e}': ${t}`)}return e}else{if(isUnixExecutable(s)){return e}}}}return""})}t.tryGetExecutablePath=tryGetExecutablePath;function normalizeSeparators(e){e=e||"";if(t.IS_WINDOWS){e=e.replace(/\//g,"\\");return e.replace(/\\\\+/g,"\\")}return e.replace(/\/\/+/g,"/")}function isUnixExecutable(e){return(e.mode&1)>0||(e.mode&8)>0&&e.gid===process.getgid()||(e.mode&64)>0&&e.uid===process.getuid()}},747:function(e){e.exports=require("fs")},986:function(e,t,i){"use strict";var s=this&&this.__awaiter||function(e,t,i,s){function adopt(e){return e instanceof i?e:new i(function(t){t(e)})}return new(i||(i=Promise))(function(i,r){function fulfilled(e){try{step(s.next(e))}catch(e){r(e)}}function rejected(e){try{step(s["throw"](e))}catch(e){r(e)}}function step(e){e.done?i(e.value):adopt(e.value).then(fulfilled,rejected)}step((s=s.apply(e,t||[])).next())})};var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)if(Object.hasOwnProperty.call(e,i))t[i]=e[i];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const n=r(i(9));function exec(e,t,i){return s(this,void 0,void 0,function*(){const s=n.argStringToArray(e);if(s.length===0){throw new Error(`Parameter 'commandLine' cannot be null or empty.`)}const r=s[0];t=s.slice(1).concat(t||[]);const o=new n.ToolRunner(r,t,i);return o.exec()})}t.exec=exec}});