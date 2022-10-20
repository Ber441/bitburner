
/** @type import(".").NS */
/** @type import("./prim.js").p */
/** @type import("./hack.js").h */

let ns = null;

export async function main(_ns) {
    ns = _ns;

    const mainlist = [/*0 */'n00dles','foodnstuff','sigma-cosmetics','joesguns','hong-fang-tea','nectar-net','harakiri-sushi'
    /*1 */ ,'max-hardware','neo-net','CSEC','iron-gym','zer0'
    /*2 */,'johnson-ortho','silver-helix','avmnite-02h','omega-net','crush-fitness','phantasy','the-hub'
    /*3 */,'summit-uni','rho-construction','millenium-fitness','I.I.I.I','rothman-uni','catalyst','computek'
    /*4 */,'syscore','global-pharm','nova-med','univ-energy','zb-def','unitalife','lexo-corp','snap-fitness','alpha-ent','aevum-police','applied-energetics','run4theh111z','.'
    /*5 */,'galactic-cyber','aerocorp','omnia','icarus','deltaone','solaris','defcomm','infocomm','zeus-med','taiyang-digital','zb-institute','darkweb','titan-labs','helios','vitalife','4sigma','kuai-gong','omnitek','nwo','powerhouse-fitness','megacorp','stormtech','microdyne','fulcrumtech','b-and-a','blade','clarkinc','ecorp','fulcrumassets','The-Cave','w0r1d_d43m0n'
    /*custom*/];

    const s = mainlist.length;
    
    var servername = ns.getHostname()  
     
    for (var i= 0; i<s; i++) {
        const t = mainlist[i];
        const m = ns.getServerMaxRam(t);
        const s = ns.getScriptRam("prim.js");
        var f = (Math.floor(m / s));

        //const rhl = ns.getServerRequiredHackingLevel(mainlist[i]);
        //const hl = ns.getHackingLevel(ns.getHostname());
        //const tested = rhl < hl;
        //ns.tprint("Hostname: " + t);
        //ns.tprint("Hackskill Required: " + rhl);
        //ns.tprint("Hackskill of Home: " + hl);      
        //ns.tprint("Hacklevel can be hacked: " + tested); 
        //ns.tprint("Formulas value: " + f);

        //ns.write("hostnames.script", "\n" + "Hostname: " + t + "\n" + "Hackskill Required: " + rhl + "\n" + "Hackskill of Home: " + hl + "\n" + "Hacklevel tested: " + tested + "\n" + "connect " + t);
        
        if(ns.hasRootAccess(t) == true) {
            ns.tprint("RootAccess: "+ "true");
            if (m > "0") {
                ns.scp("prim.js", servername);
                await ns.tprint("Copied");
                ns.exec("prim.js", servername, Number(f), mainlist[i]);
                await ns.tprint("Applied Script and Started Hacking");
            } 
        } else {
            ns.tprint("RootAccess: "+"false")
            ns.exec("hack.js" , servername, 1, mainlist[i]);
            ns.tprint("Hacking server: " + t);
            if (m > "0") {
                ns.tprint("Apply Script and Start Hacking");
                ns.scp("prim.js", servername);
                ns.exec("prim.js", servername, Number(f), mainlist[i]);
                
            }
        }
    }
}