const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
for(let i=0; i < botoes.length; i++){
    botoes[i].onclick=function(){
        for(let j=0; j< botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j.classList.remove("ativo")];
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObejetivo1 = new Date("2026-05-16T00:00:00");
const tempoObejetivo2 = new Date("2025-10-05T00:00:00");
const tempoObejetivo3 = new Date("2025-12-18T00:00:00");
const tempoObejetivo4 = new Date("2025-11-31T00:00:00");
 
const tempos = [tempoObejetivo1,tempoObejetivo2,tempoObejetivo3,tempoObejetivo4];
function calculaTempo(tempoObejetivo){
    let tempoAtual = new Date ();
    let tempoFinal = tempoObejetivo - tempoAtual
    let segundos =  Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas= Math.floor(minutos/60);
    let dias= Math. floor(horas/24);
}