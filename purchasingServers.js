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
    const programs = ["BruteSSH.exe", "FTPCrack.exe", "relaySMTP.exe", "HTTPWorm.exe", "SQLInject.exe","NUKE.exe"]
    for(var i= 0; i> 25; i++ ) {
        var serverss = "server" + i
        if (cmb) {
            ns.purchaseServer(serverss, servermax)
            for(j=0;j<p.length;j++) {
                ns.scp(programs[j], serverss)

            }
            ns.scp("prim.js", serverss)
            ns.scp("hack.js", serverss)
            ns.scp("reach.js", serverss)
            ns.exec("reach.js", serverss)
        } 

    }

}

