export default function scoreCalculation(streak: number, oldScore: number) {
    let score = oldScore + 100;
    if (streak !== 0 && streak % 5 === 0) score += 200;
    if (streak !== 0 && streak % 10 === 0) score += 500;
    return score;
}