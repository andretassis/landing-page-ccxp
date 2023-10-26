let ingressos = []

function cardHighlight(selector) {
    let element = document.querySelector(selector);

    element.classList.toggle('card_highlight');
}

function keyboardCardHighlight() {

    let ingresso1 = document.getElementById("quinta");
    let ingresso2 = document.getElementById("sexta");
    let ingresso3 = document.getElementById("sabado");
    let ingresso4 = document.getElementById("domingo");
    
    document.addEventListener("keydown", (event) => {
        if(event.code == "Digit1")
            ingresso1.classList.add('card_highlight');
            ingresso2.classList.remove('card_highlight');
            ingresso3.classList.remove('card_highlight');
            ingresso4.classList.remove('card_highlight');

        if(event.code == "Digit2") {
            ingresso1.classList.remove('card_highlight');
            ingresso2.classList.add('card_highlight');
            ingresso3.classList.remove('card_highlight');
            ingresso4.classList.remove('card_highlight');
        }

        if(event.code == "Digit3") {
            ingresso1.classList.remove('card_highlight');
            ingresso2.classList.remove('card_highlight');
            ingresso3.classList.add('card_highlight');
            ingresso4.classList.remove('card_highlight');
        }

        if(event.code == "Digit4") {
            ingresso1.classList.remove('card_highlight');
            ingresso2.classList.remove('card_highlight');
            ingresso3.classList.remove('card_highlight');
            ingresso4.classList.add('card_highlight');
        }
    })
}

function ingressoSelecionado(selector) {
    let element = document.querySelector(selector)

    element.classList.toggle('selecionado')

    if (ingressos.includes(selector)) {
        ingressos.pop(selector)
    } else {
        ingressos.push(selector)
    }
}

function mostrarIngressos() {
    if (ingressos.length > 0) {
        alert("Ingressos selecionados: " + ingressos)
    }
}

keyboardCardHighlight()
