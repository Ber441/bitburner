/** @type import(".").NS */
let ns = null;

export async function main(_ns) {
    ns = _ns;

    
    const c = ns.args[0];

    
    //var sc = ns.getPurchasedServerCost;
    //var hm = ns.getServerMaxRam("home");
    var sc = ns.hacknet.getPurchaseNodeCost();
    var hm = ns.getServerMoneyAvailable("home");
    var nc = ns.hacknet.numNodes();
    
    ns.grafting.

    ns.tprint(c);
    ns.tprint(sc);
    ns.tprint(hm >= sc)
    if (hm >= sc) {
        for(var i=0;i<c+1;i++) {
            ns.hacknet.purchaseNode()
            
            ns.tprint("purchased")
            ns.tprint(nc);

        }
    } else {
        ns.tprint(hm)
        ns.tprint("Insufficient Funds")

    }

}

