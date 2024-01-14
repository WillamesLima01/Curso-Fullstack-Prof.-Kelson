const notas = [7.00, 6.00, 6.00];

function media(notas) {    
    return (notas[0]+notas[1]+notas[2])/notas.length;
}

if(media(notas)< 5) {

    console.log(`Aluno reprovado com média: ${media(notas)} `);

}else if(media(notas)<= 6) {

    console.log(`Aluno em recuperação com média: ${media(notas)} `);

}else {
    console.log(`Aluno aprovado com média: ${media(notas)} `);

}