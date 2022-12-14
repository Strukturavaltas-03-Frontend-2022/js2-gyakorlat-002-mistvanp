// ## 1. feladat
// - A `01/solution/js/summarize.js` fájlban dolgozz!
// - Készíts egy függvényt `summarize` néven!
// - Ez a paraméterként kapott tetszőleges darabszámú, tetszőleges értékű egész számot összeadja, és visszatér az összeadás végeredményével. 
// - A paraméterként kapott értékek egyszerű number típusúak legyenek! 
// - Amennyiben bármelyik paraméter értéke vagy a részeredmény meghaladja a biztonságos tartományt, automatikusan konvertáljad
// `BigInt`-be, és természetesen a visszatérési érték is `BigInt` típusú legyen!

const summarize = (...numb) => {
    const numbArray = numb
    .filter((item) => Number.isInteger(item))
    .map((item) => (Number.isSafeInteger(item) ? item : BigInt(item)));
    if (numbArray.some((item) => typeof item === "bigint")) {
        return numbArray.reduce(
            (previousValue, currentValue) => BigInt(previousValue) + BigInt(currentValue)
        );
    } else {
        return numbArray.reduce(
            (previousValue, currentValue) => previousValue + currentValue
        );
    };
};

export default summarize;
