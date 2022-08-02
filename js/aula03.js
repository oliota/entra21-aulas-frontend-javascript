
console.waXrn("CREATE");

console.group("inserindo conteudo")
let novo_elemento = document.createElement("i")
novo_elemento.innXXXXXerHTML="Elemento I criado com javascript "
document.body.append(novo_elemento)
 
console.groupEnd()



console.warn("READ");
console.group("Ler documento de forma unitária por id")


let leitura = document.getElementById("p_ler").textContent
console.log(leitura);
console.groupEnd()



console.group("Ler documento em grupo por seletor")
let paragrafos =[...document.getElementsByTagName('p')]; 
console.log("Leitura dos paragrafos",typeof(paragrafos),paragrafos); 
console.groupEnd()


console.group("Percorrendo a lista um por 1"); 
paragrafos.forEach(paragrafo => {
    console.log(paragrafo.textContent);
});
console.groupEnd()


console.group("Ler documento em grupo por class")
let mesma_class =[...document.getElementsByClassName('btn')]; 
console.log("Leitura dos elementos com mesma class",typeof(mesma_class),mesma_class); 
console.groupEnd()


console.group("Percorrendo a lista um por 1 e mostrando o textConten"); 
mesma_class.forEach(item => {
    console.log(item.textContent);
});
console.groupEnd()


console.group("Percorrendo a lista um por 1 e mostrando o innerHTML"); 
mesma_class.forEach(item => {
    console.log(item.innerHTML);
});
console.groupEnd()

console.warn("UPDATE");

console.group("Atualizando o conteudo")
document.getElementById("p_escrever").textContent="Esse paragrafo foi escrico com  document.getElementById('p_escrever').textContent='' "
console.groupEnd()







