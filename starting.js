/** @type import(".").NS */
let ns = null;

export async function main(_ns) {
    ns = _ns;
    // go to city 
    // click on alpha ent.
    // buy tor router

    //figure out how my money i need to buy the hacks
    //then buy hacks

    const programs = ["BruteSSH.exe", "FTPCrack.exe", "relaySMTP.exe", "HTTPWorm.exe", "SQLInject.exe","NUKE.exe"]
    const s = programs.length;
    const pus = [];
    

    
    //ns.singularity.joinFaction(factions)
    //ns.singularity.purchaseProgram(programs)

    ns.singularity.purchaseTor()
    

    for (var i= 0; i<s; i++) {
        const p = programs[i]
        pus.push(ns.singularity.getDarkwebProgramCost(p))
        //var pu[] = ns.singularity.getDarkwebProgramCost(p)

        const adding = (pu[0] + pu[1] + pu[2] + pu[3] + pu[4] )
        ns.tprint(adding);

    }
    
}