// /* 
// Victor Tasca tem 24 anos, pesa 80 kg
// tem 1.8 m de altura e seu IMC é de 25.922525252
// Victor Tasca nasceu em 2000
// */

// const nome = "Victor";
// const sobrenome = "Tasca";
// const idade = 24;
// const peso = 80;
// const alturaEmMetros = 1.8;
// const IMC = peso / (alturaEmMetros * alturaEmMetros);
// let anoNascimento = 2024 - idade;

// console.log(nome, sobrenome, "tem", idade, "anos,", "pesa", peso, "KG");
// console.log("Tem", alturaEmMetros + "m", "de altura e seu IMC é de", IMC);
// console.log(nome, sobrenome, "nasceu em", anoNascimento);



/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80; // Corrigido para metros (ao invés de cm)
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;
 
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2019 - idade;
 
// template strings
 
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
