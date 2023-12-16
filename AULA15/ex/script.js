const num1 = 55.00000;
document.body.innerHTML += `<b>Seu número é: ${num1}</b> <br>`;
document.body.innerHTML += `Raiz quadrada:${Math.sqrt(num1)}<br>`;
document.body.innerHTML += `${num1} é inteiro: ${Boolean(num1)}<br>`;
document.body.innerHTML += `É NaN: ${Number.isNaN(num1)}<br>`;
document.body.innerHTML += `Arredondando para baixo: ${Math.floor(num1)} <br>`;
document.body.innerHTML += `Arredondando para cima: ${Math.ceil(num1)} <br>`;
document.body.innerHTML += `Com duas casas decimais:${Math.trunc(num1)}`