export default function (min: number = Number.MIN_VALUE, max: number = Number.MIN_VALUE) {
    return Math.floor(Math.random() * (max - min)) + min;
}