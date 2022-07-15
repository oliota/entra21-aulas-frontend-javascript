

function semParametros(){
    console.log("Semelhante ao java , esse tipo de função é considerado um procedimento, pois sempre executaria da mesma forma");
}


function apenasComRetorno(){

    console.log("Semelhante ao Java , esse tipo de função já se torna do tipo utilitária, pois tem o objetivo de retornar uma informação");
    return "Esta aqui o seu retorno, faça bom uso ao atribuir a uma variavel, concatenação , log ou quem sabe participar de algum calculo..."

}


function apenasComParametros(nome,idade,cidade){

    console.log("Semelhante ao Java , esse tipo de função já se torna mais dinamica pois utiliza parametros e pode executar de formas diferentes");
    console.log("Olá "+nome+" residente de "+cidade);
    if(idade>=18){
        console.log("Embora a aula não tenha nenhuma restrição de idade, verificamos que você é de maior");
    }else{
        console.log("Embora a aula não tenha nenhuma restrição de idade, verificamos que você é de menor");
    }

}

function completa(nome,idade){
    console.log("Semelhante ao Java, esse tipo de função recebe parametros e devolve um valor, e isso torna o tipo mais dinamico possivel");

    console.log("Bem vindo "+nome+", verificamos a sua idade e alguma decisao pode ser tomada em relação a esse dado");

    return idade<18;
}

function teste(){
    alert("opa")
}


somar = (a,b)=>{ 
    console.log("Na pratica a função é criada em uma variavel chamada soma que aceita parametros");
alert (a+b);
}



variaveisArray = () =>{

    console.log("Em javascript as variaveis array são definidas com  let lista = []");
    console.log("Para incluir itens na lista é possivel já definir com valores ou acrescentar depois com  lista.push(seuNovoItem)");

    let lista=[]

    console.log(lista);
    console.log("Lista = ",lista);

    lista.push("Primeiro")
    lista.push("Segundo")
    lista.push("Terceiro")
    lista.push("Quarto")

    
    console.log("Lista depois de inserir= ",lista," veja os logs antigos a lista mudou 😱");

    lista.splice(0,2);

    console.log("a função splice remove uma quantidade de itens a partir do indice    lista.splice(index,quantidade)   index 0  quantidade a remover 2");
    
    console.log("Lista depois de remover= ",lista," veja os logs antigos a lista mudou 😱");

    console.log("Como encontrar o indice com base em um valor da lista");
    console.log("Terceiro nesse momento está no indice ",lista.indexOf("Terceiro")," pois utilizando lista.indexOf('Terceiro') retorna a posição atual");

    console.log("Como percorrer uma lista");
    console.log("--------for tradicional ---------------");

    for (let index = 0; index < lista.length; index++) {
        console.log("for tradicional com indice", index,lista[index]);  
        
    }

    console.log("---------foreach padrão---- item of array ----------");
    for (const item of lista) {
        console.log("for para objetos sem contagem de indice",item);
    }

    console.log("--------foreach com arrow function---------------");
    lista.forEach(item => {
        
        console.log("for com lambda para objetos sem contagem de indice",item);
    });


}