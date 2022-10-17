/** @type import(".").NS */
let ns = null;

export async function main(_ns) {
    ns = _ns;

        const mainlist = [
        /*0 */'n00dles','foodnstuff','sigma-cosmetics','joesguns','hong-fang-tea','nectar-net','harakiri-sushi'
        /*1 */ ,'max-hardware','neo-net','CSEC','iron-gym','zer0'
        /*2 */,'johnson-ortho','silver-helix','avmnite-02h','omega-net','crush-fitness','phantasy','the-hub'
        /*3 */,'summit-uni','rho-construction','millenium-fitness','I.I.I.I','rothman-uni','catalyst','computek'
        /*4 */,'syscore','global-pharm','nova-med','univ-energy','zb-def','unitalife','lexo-corp','snap-fitness','alpha-ent','aevum-police','applied-energetics','run4theh111z','.'
        /*5 */,'galactic-cyber','aerocorp','omnia','icarus','deltaone','solaris','defcomm','infocomm','zeus-med','taiyang-digital','zb-institute','darkweb','titan-labs','helios','vitalife','4sigma','kuai-gong','omnitek','nwo','powerhouse-fitness','megacorp','stormtech','microdyne','fulcrumtech','b-and-a','blade','clarkinc','ecorp','fulcrumassets','The-Cave','w0r1d_d43m0n'];

        const s = mainlist.length;
    
        for (var i= 0; i<s; i++) {

            const t = mainlist[i];
            const rhl = ns.getServerRequiredHackingLevel(mainlist[i]);

            ns.write("info.txt","Hostname: " + t + "\n" + "Hackskill Required: " + rhl + "\n", "a");

        }

}