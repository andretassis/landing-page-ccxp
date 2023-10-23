const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const evento = "01 dec 2023"

function contador() {
    const dataEvento = new Date(evento);
    const hoje = new Date();

    const data = (dataEvento - hoje);

    const segundosTotais = data/1000;

    const dataDia = Math.floor((segundosTotais) / 60 / 60 / 24);
    const dataHora = formatarTempo(Math.floor(((segundosTotais) / 60 / 60) % 24));
    const dataMinuto = formatarTempo(Math.floor(((segundosTotais) / 60) % 24));
    const dataSegundo = formatarTempo(Math.floor((segundosTotais) % 60));

   dia.innerHTML = `${dataDia}D`
   hora.innerHTML = `${dataHora}H`
   minuto.innerHTML = `${dataMinuto}M`
   segundo.innerHTML = `${dataSegundo}S`
}

function formatarTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo
}

contador()
setInterval(contador, 1000)
