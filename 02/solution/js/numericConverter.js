// ## 2. feladat
// - A `02/solution/js/numericConverter.js` fájlban dolgozz!
// - Készíts egy függvényt `numericConverter` néven!
// - Ez a paraméterként megadott tízes számrendszerbeli számot átkonvertálja kettes, nyolcas és tizenhatos
// számrendszerbe is.
// - Ezeket az értékeket egy objektumban add vissza. A property-k neve legyen: binary, octal, hexa.

const numericConverter = (numb) => {
    const binNumb = numb.toString(2);
    const octNumb = numb.toString(8);
    const hexNumb = numb.toString(16);
    return {
      binary: binNumb,
      octal: octNumb,
      hexa: hexNumb,
    };
  };
  
  export default numericConverter;