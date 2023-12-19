function criaPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,
  };
}

const pessoa1 = criaPessoa("Luiz", "Miranda", 25);
const pessoa2 = criaPessoa("Maria", "Oliveira", 35);
const pessoa3 = criaPessoa("João", "Moreira", 26);
const pessoa4 = criaPessoa("Junior", "Lara", 21);
const pessoa5 = criaPessoa("Felipe", "Silva", 56);

console.log(pessoa1.nome, pessoa1.sobrenome);
