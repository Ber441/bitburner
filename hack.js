/** @type import(".").NS */
let ns = null;

export async function main(_ns) {
   ns = _ns;

   const c = ns.args[0];
   const h = c.toString.call(c);
   var p = ns.getServerNumPortsRequired(h);

   async function ssh(target) { 
      if(ns.fileExists("BruteSSH.exe", "home")) {
         await ns.brutessh(target);
      } 
   };
   async function ftp(target) { 
      if(ns.fileExists("FTPCrack.exe", "home")) {
         await ns.ftpcrack(target);
      }
   };
   async function smtp(target) {
      if(ns.fileExists("relaySMTP.exe", "home")) {
         await ns.relaysmtp(target);
      } 
   };
   async function http(target) {
      if(ns.fileExists("HTTPWorm.exe", "home")) {
         await ns.httpworm(target);
      }
   };
   async function sql(target) {
      if(ns.fileExists("SQLInject.exe","home")) {
         await ns.sqlinject(target);
      }
   };
   async function nuker(target) {
      if(ns.fileExists("NUKE.exe", "home")) { 
         await ns.nuke(target); 
      } 
   };
   async function backdoor(target) { 
      // find Source file -4 to use
      //ns.singularity.installBackdoor(target)
      ns.tprint("Backdoor Ready");
      ns.tprint("Done");
   };

   async function msg() {ns.tprint("Hostname: " + h + " : " + "Ports: " + p); }
   
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
         } else { ns.tprint("I have access"); }
}
