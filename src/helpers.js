export function calculate(goodsPrice, monthlyIncoming) {
    const secInMonth = 2629000;
    const goodsPerSec = (monthlyIncoming / secInMonth) / goodsPrice;
    return goodsPerSec;
}