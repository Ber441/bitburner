/** @type import(".").NS */
let ns = null;

export async function main(_ns) {
   ns = _ns;

   const c = ns.args[0];
   const h = c.toString.call(c);
   var p = ns.getServerNumPortsRequired(h);
   var servername = ns.getHostname()


   async function ssh(target) { 
      if(ns.fileExists("BruteSSH.exe", servername)) {
         await ns.brutessh(target);
      } 
   };
   async function ftp(target) { 
      if(ns.fileExists("FTPCrack.exe", servername)) {
         await ns.ftpcrack(target);
      }
   };
   async function smtp(target) {
      if(ns.fileExists("relaySMTP.exe", servername)) {
         await ns.relaysmtp(target);
      } 
   };
   async function http(target) {
      if(ns.fileExists("HTTPWorm.exe", servername)) {
         await ns.httpworm(target);
      }
   };
   async function sql(target) {
      if(ns.fileExists("SQLInject.exe",servername)) {
         await ns.sqlinject(target);
      }
   };
   async function nuker(target) {
      if(ns.fileExists("NUKE.exe", servername)) { 
         await ns.nuke(target); 
      } 
   };
   async function backdoor(target) { 
      // find Source file -4 to use
      //ns.singularity.installBackdoor(target)
      ns.tprint("Backdoor Ready");
      ns.tprint("Done");
   };

   async function msg() {await ns.tprint("Hostname: " + h + " : " + "Ports: " + p); }
   
   if (ns.hasRootAccess(h) == false) {
         ns.tprint("Hacking in Progress.." + h)
                  if (p == "0") {
                     msg();
                     nuker(h);
                     backdoor(h);
                  } 
                  if(p == "1") {
                     msg();
                     ssh(h);
                     nuker(h);
                     backdoor(h);
                  }
                  if(p == "2") {
                     msg();
                     ssh(h);
                     ftp(h);
                     nuker(h);
                     backdoor(h);
                  } 
                  if(p == "3") {
                     msg();
                     ssh(h);
                     ftp(h); 
                     smtp(h);
                     nuker(h);
                     backdoor(h);
                  }
                  if(p == "4") {
                     msg();
                     ssh(h);
                     ftp(h);
                     smtp(h);
                     http(h);
                     nuker(h);
                     backdoor(h);
                  } 
                  if(p == "5") {
                     msg();
                     ssh(h);
                     ftp(h);
                     smtp(h);
                     http(h);
                     sql(h);
                     nuker(h);
                     backdoor(h);
                  }
         }
}
