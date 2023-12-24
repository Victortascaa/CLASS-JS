// function criaPessoa(nome, sobrenome, idade) {
//   return {
//     nome,
//     sobrenome,
//     idade,
//   };
// }

// const pessoa1 = criaPessoa("Luiz", "Miranda", 25);
// const pessoa2 = criaPessoa("Maria", "Oliveira", 35);
// const pessoa3 = criaPessoa("João", "Moreira", 26);
// const pessoa4 = criaPessoa("Junior", "Lara", 21);
// const pessoa5 = criaPessoa("Felipe", "Silva", 56);

// console.log(pessoa1.nome, pessoa1.sobrenome);

const pessoa1 = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 25,

  fala() {
    // console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    console.log(`A minha idade atual é ${this.idade}`);
  },

  incrementaIdade(){
    this.idade++;
  }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();