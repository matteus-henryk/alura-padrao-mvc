////////
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return "nome completo " + this.nome + " " + this.sobrenome;
  }
}

var pessoa = new Pessoa("Flávio", "Almeida");
// console.log(pessoa.nomeCompleto);

/////////
class Negociacao2 {
  constructor(data, quantidade, valor) {
    this._data = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor = valor;

    Object.freeze(this); // congela a instância do objeto
  }

  get volume() {
    return this._quantidade * this._valor;
  }

  get data() {
    return new Date(this._data.getTime());
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }
}

var negociacao = new Negociacao2(new Date(), 1, 100);
negociacao.data.setDate(negociacao.data.getDate() + 1);

// console.log(negociacao.data);

////////////
//! minha solução
let dataString = "17-05-2016";

let dataFormatada = dataString
  .split("-")
  .map((item, index) => (index === 1 ? item - 1 : item));
// console.log(new Date(...dataFormatada.reverse()));

//! solucçao do professor
let dataString2 = "17-05-2016";

dataString2 = dataString2.split("-").reverse().join("/");

let data = new Date(dataString2);

// console.log(data);

////////////
let lista1 = ["banana", "laranja", "mamão"];
let lista2 = ["caju", "tangerina", "abacaxi"];

lista1.push(...lista2);

// console.log(lista1);

//////////
//! minha solução
let numeros = [3, 2, 11, 20, 8, 7];

let novaLista = numeros.map((item) => (item % 2 ? item * 2 : item));

// console.log(numeros);
// console.log(novaLista);

//! solução do professor
// let numeros = [3,2,11,20,8,7];
let novosNumeros = [];

numeros.forEach((item) => {
  if (item % 2 != 0) {
    novosNumeros.push(item * 2);
  } else {
    novosNumeros.push(item);
  }
});
// console.log(novosNumeros);

//////////
function somaDoisNumeros(numero1, numero2) {
  return numero1 + numero2;
}

let numeros2 = [10, 30];
// console.log(somaDoisNumeros(...numeros2));

//////////
class Aluno {
  constructor(matricula, nome) {
    this.matricula = matricula;
    this.nome = nome;
  }
}

class Prova {
  constructor(aluno, nota) {
    this.aluno = aluno;
    this.nota = nota;
  }
}

let avaliacoes = [
  new Prova(new Aluno(1, "Luana"), 8),
  new Prova(new Aluno(2, "Cássio"), 6),
  new Prova(new Aluno(3, "Barney"), 9),
  new Prova(new Aluno(4, "Bira"), 5),
];

let aprovados = avaliacoes
  .filter((prova) => prova.nota >= 7)
  .map((prova) => prova.aluno.nome);

// console.log(aprovados);

/////////
//! MINHA SOLUÇÃO
class Codigo {
  constructor(codigo) {
    this._codigo = codigo;
  }

  get codigo() {
    return this._codigo;
  }

  validaCodigo() {
    if (/\D{3}\D{2}-\d{2}/.test(this._codigo)) {
      return alert("Código válido");
    } else {
      return alert("Código inválido");
    }
  }
}

let codigo = new Codigo("GWZ-JJ-12");
// console.log(codigo.codigo);
// codigo.validaCodigo();

let codigo2 = new Codigo("1X1-JJ-12");
// console.log(codigo2.codigo);
// codigo2.validaCodigo();

//! SOLUÇÃO DO PROFESSOR
// class Codigo2 {

//   constructor(texto) {

//       if(!this._valida(texto)) throw new Error(`O texto ${texto} não é um código válido`);
//       this._texto = texto;
//   }

//   _valida(texto) {

//       return /\D{3}-\D{2}-\d{2}/.test(texto);
//   }

//   get texto() {

//       return this._texto;
//   }
// }

// let codigo1 = new Codigo2('GWZ-JJ-12'); // válido
// console.log(codigo1.texto);
// let codigo3 = new Codigo2('1X1-JJ-12'); // inválido
// console.log(codigo3.texto);

////////

function exibeNoConsole(lista) {
  // lista.forEach(item => console.log(item));
}

let listaDeNomes1 = ["Flávio", "Rogers", "Júlia"];
let listaDeNomes2 = ["Vieira", "Fernanda", "Gerson"];
exibeNoConsole([].concat(listaDeNomes1, listaDeNomes2));

class ConversorXML {
  static converte(objeto) {
    // converte um objeto em XML
  }
}

let conversor = ConversorXML.converte({ nome: "Guaraci", idade: 40 });

////////
let numeros3 = [1, 2, 3, 4];
let resultado = numeros3.reduce((total, numero) => {
  return total * numero;
}, 1);

// console.log(resultado);

////////
class Conta {
  constructor(saldo) {
    this._saldo = saldo;
  }

  get saldo() {
    return this._saldo;
  }

  atualiza(taxa) {
    throw new Error("Você deve sobrescrever o método");
  }
}

class ContaCorrente extends Conta {
  atualiza(taxa) {
    this._saldo = this._saldo + taxa;
  }
}

class ContaPoupanca extends Conta {
  atualiza(taxa) {
    this._saldo = this._saldo + taxa * 2;
  }
}

let conta1 = new ContaCorrente(200);
let conta2 = new ContaPoupanca(300);
conta1.atualiza(2);
conta2.atualiza(3);
// console.log(conta1.saldo);
// console.log(conta2.saldo);

/////////////
class Relogio {
  constructor() {
    this._segundos = 0;

    setInterval(() => {
      // console.log(++this._segundos);
    }, 1000);
  }
}

var relogio = new Relogio();

///////
let carro = {
  velocidade: 100,
  acelera: () => {
    // console.log(this);
    // console.log(`Carro a ${this.velocidade} km por hora!`);
  },
};
carro.acelera();

//////
let funcionario = new Proxy(
  { email: "abc@abc.com" },
  {
    get(target, prop, receiver) {
      // console.log("armadilha aqui");
      return `**${Reflect.get(target, prop, receiver)}**`;
    },
  }
);

// console.log(funcionario.email);

/////////

class Funcionario {
  constructor(email) {
    this._email = email;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    this._email = email;
  }
}

let funcionario2 = new Proxy(new Funcionario("matteus@matteus"), {
  get(target, prop, receiver) {
    // console.log('Armadilha aqui');
    // console.log(prop);
    return Reflect.get(target, prop, receiver);
  },
});

let funcionario4 = new Proxy(new Funcionario("stafany@stefany"), {
  set(target, prop, value, receiver) {
    console.log(`Antes: ${target[prop]}, depois ${value}, nome ${prop}`);
    return Reflect.set(target, prop, value, receiver);
  },
});

funcionario4.email = "staaffaf@gadjsauj";

// console.log(funcionario2.email);

////////

let funcionario3 = new Proxy(
  { email: "abc@abc.com" },
  {
    set(target, prop, value, receiver) {
      // console.log(`Valor antigo ${target[prop]}, valor atual ${value}`)
      // targe[prop] = value;
      return Reflect.set(target, prop, value, receiver);
    },
  }
);

funcionario3.email = "amamama@mamamam";

///////
// let listaDeNegociacoes = dadosServidor
//   .reduce(
//     (novoArray, array) =>
//       // novoArray receberá os itens de array, no final terá uma dimensão apenas
//       novoArray.concat(array),
//     []
//   )
//   .map(
//     (dado) =>
//       // para cada dado, cria uma instância de negociação. No final, teremos uma nova lista só com instâncias de Negociacao

//       new Negociacao(new Date(dado.data), dado.quantidade, dado.valor)
//   );
