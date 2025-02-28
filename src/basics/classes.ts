// classes
/*
    modificadores de acesso
    public (padrão): acessível de qualquer lugar.
    private: acessível apenas dentro da própria classe.
    protected: acessível na classe e subclasses.
*/

/*
    modificadores de propriedades
    readonly
    optional (?)
    definite assignment assertion (!)
*/

class Character {
  protected name?: string;
  readonly strength: number;
  skill: number;

  constructor(strength: number, skill: number, name?: string) {
    this.name = name;
    this.strength = strength;
    this.skill = skill;
  }

  attack(): void {
    console.log(`Attack with ${this.strength} points`);
  }
}

// subclass
class Magician extends Character {
  magicPoints: number;

  constructor(
    strength: number,
    skill: number,
    magicPoints: number,
    name?: string
  ) {
    super(strength, skill, name);
    this.magicPoints = magicPoints;
  }
}

const p1 = new Character(30, 10, "Character");
const p2 = new Magician(5, 20, 50);
p1.attack();
p2.attack();
