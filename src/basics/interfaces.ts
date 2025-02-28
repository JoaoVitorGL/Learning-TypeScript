// Interfaces

interface rpg {
  titulo: string;
  ano: number;
  disponivel: number | boolean;
  msg(): string;
}

const bd3: rpg = {
  titulo: "Baldurs Gate 3",
  ano: 2023,
  disponivel: true,
  msg: function (): string {
    return "D&D game";
  },
};

class ded implements rpg {
  titulo: string;
  ano: number;
  disponivel: number | boolean;

  constructor(titulo: string, ano: number, disponivel: number | boolean) {
    this.titulo = titulo;
    this.ano = ano;
    this.disponivel = disponivel;
  }
  msg(): string {
    return "D&D game";
  }
}

const g = new ded("Baldurs Gate 3", 2023, true);
console.log(g);
console.log(g.msg());
