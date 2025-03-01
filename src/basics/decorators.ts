// Decorators
function ExibirNome(target: any) {
  console.log(target);
}

@ExibirNome
class Funcionario {}

@ExibirNome
class Adm {}

function apiVersion(version: string) {
  return (target: any) => {
    Object.assign(target.prototype, { __version: version, __name: "test" });
  };
}

// attribute decorator
function minLength(length: number) {
  return (target: any, key: string) => {
    //console.log(target[key]);
    let _value = target[key];

    const getter = () => _value;
    const setter = (value: string) => {
      if (value.length < length) {
        throw new Error(`Tamanho menor do que ${length}`);
      } else {
        _value = value;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

@apiVersion("1.10")
class Api {
  @minLength(3)
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const api = new Api("us");
console.log(`Name: ${api.__name}, Version: ${api.__version}`);
console.log(api.name);
