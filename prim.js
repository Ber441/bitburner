/** @type import(".").NS */
let ns = null;
export async function main(_ns) {
	ns = _ns;
	const c = ns.args[0];
	const ta = c.toString.call(c);
	while(true) {
	  	if(ns.getServerSecurityLevel(ta) >= ns.getServerBaseSecurityLevel(ta) + 5) { await ns.weaken(ta);} else 
	  	if(ns.getServerMoneyAvailable(ta) <= ns.getServerMaxMoney(ta) * 0.75) { await ns.grow(ta);} else {  await ns.hack(ta);}
	}
}

