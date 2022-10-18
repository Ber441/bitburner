/** @type import(".").NS */
let ns = null;

export async function main(_ns) {
    ns = _ns;

    const mainlist = [/*0 */'n00dles','foodnstuff','sigma-cosmetics','joesguns','hong-fang-tea','nectar-net','harakiri-sushi'
    /*1 */ ,'max-hardware','neo-net','CSEC','iron-gym','zer0'
    /*2 */,'johnson-ortho','silver-helix','avmnite-02h','omega-net','crush-fitness','phantasy','the-hub'
    /*3 */,'summit-uni','rho-construction','millenium-fitness','I.I.I.I','rothman-uni','catalyst','computek'
    /*4 */,'syscore','global-pharm','nova-med','univ-energy','zb-def','unitalife','lexo-corp','snap-fitness','alpha-ent','aevum-police','applied-energetics','run4theh111z','.'
    /*5 */,'galactic-cyber','aerocorp','omnia','icarus','deltaone','solaris','defcomm','infocomm','zeus-med','taiyang-digital','zb-institute','darkweb','titan-labs','helios','vitalife','4sigma','kuai-gong','omnitek','nwo','powerhouse-fitness','megacorp','stormtech','microdyne','fulcrumtech','b-and-a','blade','clarkinc','ecorp','fulcrumassets','The-Cave','w0r1d_d43m0n'];
    
    var servermax = 1048576
    var cost = ns.getPurchasedServerCost(servermax)
    var home = ns.getServerMoneyAvailable("home")

    ns.tprint(cost)
    ns.tprint(home)
    var cmb = (cost > home)
    ns.tprint(cmb)




    for(var i= 0; i> 25; i++ ) {

        if (cmb) {
            ns.purchaseServer("server"+ i, servermax)
            
            ns.scp("prim.js",)
        } 


    }




}

