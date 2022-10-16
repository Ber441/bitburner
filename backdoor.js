
/** @type import(".").NS */
let ns = null;

export async function main(_ns) {
    ns = _ns;

    const mainlist = ['n00dles','foodnstuff','sigma-cosmetics','joesguns','hong-fang-tea','nectar-net','harakiri-sushi'
    ,'max-hardware','neo-net','CSEC','iron-gym','zer0'
    ,'johnson-ortho','silver-helix','avmnite-02h','omega-net','crush-fitness','phantasy','the-hub'
    ,'summit-uni','rho-construction','millenium-fitness','I.I.I.I','rothman-uni','catalyst','computek'
    ,'syscore','global-pharm','nova-med','univ-energy','zb-def','unitalife','lexo-corp','snap-fitness','alpha-ent','aevum-police','applied-energetics','run4theh111z','.'
    ,'galactic-cyber','aerocorp','omnia','icarus','deltaone','solaris','defcomm','infocomm','zeus-med','taiyang-digital','zb-institute','darkweb','titan-labs','helios','vitalife','4sigma','kuai-gong','omnitek','nwo','powerhouse-fitness','megacorp','stormtech','microdyne','fulcrumtech','b-and-a','blade','clarkinc','ecorp','fulcrumassets','The-Cave','w0r1d_d43m0n']; 
    //const 0 = ['n00dles','foodnstuff','sigma-cosmetics','joesguns','hong-fang-tea','nectar-net','harakiri-sushi'];//backdoored
    //const 1 = [,'max-hardware','neo-net','CSEC','iron-gym','zer0']; //backdoored
    //const 2 = [,'johnson-ortho','silver-helix','avmnite-02h','omega-net','crush-fitness','phantasy','the-hub',]; //backdoor
    //const 3 = [,'summit-uni','rho-construction','millenium-fitness','I.I.I.I','rothman-uni','catalyst','computek'];
    //const 4 = [,'syscore','global-pharm','nova-med','univ-energy','zb-def','unitalife','lexo-corp','snap-fitness','alpha-ent','aevum-police','applied-energetics','run4theh111z','.'];
    //const 5 = [,'galactic-cyber','aerocorp','omnia','icarus','deltaone','solaris','defcomm','infocomm','zeus-med','taiyang-digital','zb-institute','darkweb','titan-labs','helios','vitalife','4sigma','kuai-gong','omnitek','nwo','powerhouse-fitness','megacorp','stormtech','microdyne','fulcrumtech','b-and-a','blade','clarkinc','ecorp','fulcrumassets','The-Cave','w0r1d_d43m0n'];

    const s = mainlist.length;

    for (var i= 0; i<s; i++) {

        const t = mainlist[i];
        ns.tprint("Hostname: " + t);
        ns.tprint("Backdoor: " + t);
        //ns.installBackdoor()
        if (ns.hasRootAccess(t) == true) {
            ns.installBackdoor("home")
            
            ns.tprint("worked?");


            if(ns.installBackdoor == false) {
                ns.write("backdoor.script", "\n" + "connect " + t, "w");
                ns.tprint("Writen"); 
            }
    
        }


    }


}