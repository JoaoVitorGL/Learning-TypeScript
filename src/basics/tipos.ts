// tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "teste";
let idade: number = 10;
let altura: number = 1.8;

// tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// tipos abrangentes: any, void
let retorno: void;
let qualquer: any = 10; // false, "teste"

// objeto - sem previsibilidade
let game: object = {
  titulo: "The Witcher 3",
  ano: 2015,
};

// objeto tipado - com previsibilidade
type GameLoja = {
  titulo: string;
  ano: number;
  preco: number;
  disponivel: boolean;
};

let game1: GameLoja = {
  titulo: "The Witcher 3",
  ano: 2015,
  preco: 120.0,
  disponivel: true,
};
