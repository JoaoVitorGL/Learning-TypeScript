// funções

function sum(x: number, y: number): number {
  return x + y;
}

let soma: number = sum(2, 5);
console.log(soma);

// hello(name: string): string
function hello(name: string) {
  return `Hello ${name}`;
}

console.log(hello("World"));

// funcões multi tipos
function call(telefone: number | string) {
  return telefone;
}

function call2(telefone: number | string): number | string {
  return telefone;
}

console.log(call(111)); // "111"

// funções async

async function getDatabase(id: number): Promise<string> {
  return "Nome";
}
