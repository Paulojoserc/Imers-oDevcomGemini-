import cavaleiros from './cavaleiros.js';

let section = document.getElementById("resultados-pesquisa")
console.log(section)

let resultados ="";
for (let cavaleiro of cavaleiros){

resultados += `
<div class="item-resultado">
    <h2>
        <a href="#" target="_blank>${cavaleiros[0].nome}</a>
    </h2>
    <p class="descricao-meta">${cavaleiros.descricao}</p>
    <a href=${cavaleiros.link} target="_blank">Mais informações</a>
`
}

section.innerHTML = resultados
