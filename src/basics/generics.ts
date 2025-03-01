// Generics
function concatArray<T>(...items: T[]): T[] {
  return new Array().concat(...items);
}

const numArray = concatArray<number[]>([2, 6], [9]);
const stgArray = concatArray<string[]>(["Goku"], ["Vegeta"]);

console.log(numArray);
console.log(stgArray);
