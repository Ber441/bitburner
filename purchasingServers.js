/** @type import(".").NS */
let ns = null;

export async function main(_ns) {
    ns = _ns;

    var servermax = 1048576
    var cost = ns.getPurchasedServerCost(servermax)
    var home = ns.getServerMoneyAvailable("home")
    

    ns.tprint("Cost: "+ cost)
    ns.tprint("Home: " + home)
    var cmb = (home >= cost )
    ns.tprint(cmb)
    //const programs = ["BruteSSH.exe", "FTPCrack.exe", "relaySMTP.exe", "HTTPWorm.exe", "SQLInject.exe","NUKE.exe"]
    for(var i= 0+1; i< 25; i++ ) {
        var serverss = "server" + i

        if (cmb) {
            
            //ns.purchaseServer(serverss, servermax)
            //for(j=0;j<programs.length;j++) {
                //ns.tprint(programs[j])
                //ns.scp(programs[j], serverss, "home")

            //}
            ns.tprint(serverss)

            //ns.scp("prim.js", "server1")
            //ns.scp("hack.js", "server1")
            //ns.scp("copyreach.js", "server1")
            //ns.exec("copyreach.js", "server1", 1)

            ns.scp("prim.js", serverss)
            ns.scp("hack.js", serverss)
            ns.scp("copyreach.js", serverss)
            ns.exec("copyreach.js", serverss, 1)
        } 

    }

}

