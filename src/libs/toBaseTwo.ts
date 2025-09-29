export default function toBaseTwo(x: number): string {
    x = Math.floor(x);
    let ret: string = ""
    if (x < 0) {
        x = Math.abs(x)
        ret += "-"
    }
    const potents: number[] = getPotents(x)
    while (potents.length > 0) {
        const potent = potents.pop()!
        if(potent <= x){
            x-=potent
            ret += "1"
        } else {
            ret+="0"
        }
    }
    return ret
}

function getPotents(x: number): number[] {
    const potents: number[] = []
    let curPotent = 1
    do {
        potents.push(curPotent)
        curPotent *= 2
    } while (curPotent <= x)
    return potents
}