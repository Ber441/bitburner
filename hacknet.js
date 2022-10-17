/** @type import(".").NS */
let ns = null;

export async function main(_ns) {
    ns = _ns;

    
    const c = ns.args[0];

    
    //var sc = ns.getPurchasedServerCost;
    //var hm = ns.getServerMaxRam("home");
    var sc = ns.hacknet.getPurchaseNodeCost();
    var cmb = sc * c;
    var hm = ns.getServerMoneyAvailable("home");
    var nc = ns.hacknet.numNodes();

    ns.tprint(c);
    ns.tprint(sc* c);
    ns.tprint(hm >= sc);
    ns.tprint(nc);
    
    if (hm >= cmb) {
        for(var i=0;i<c+1;i++) {
            ns.hacknet.purchaseNode()
            
            ns.tprint("purchased")
           // ns.tprint(nc);

        }
    } else {
        ns.tprint(hm)
        ns.tprint("Insufficient Funds")

    }

}

