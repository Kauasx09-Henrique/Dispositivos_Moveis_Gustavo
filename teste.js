
let nota1 = [5 , 5.99 , 4 , 5];

var multi , div;

var soma =0


for(let i = 0; i <nota1.length; i++){
    soma += nota1[i];
}


 div = soma /4 ;

if( div>= 5){
    console.log("Aluno passou de ano!",div);
}
else if(div=4.95){
    console.log("Sistema arredondou!",div)
}
else{
    console.log("Aluno reprovado!!!",div);
}
 