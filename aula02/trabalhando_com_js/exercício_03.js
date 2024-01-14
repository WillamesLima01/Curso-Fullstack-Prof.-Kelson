const notas = [8.00, 7.00];

function media(notas) {
    var n1 = parseFloat(notas[0]);
    var n2 = parseFloat(notas[1]);
    return (n1+n2)/2    
}

console.log(`A primeira nota do aluno é : ${notas[0]}`);
console.log(`A segunda nota do aluno é : ${notas[1]}`);
console.log(`A média do aluno é : ${media(notas)}`);