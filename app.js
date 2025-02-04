let amigos = [];

function adicionarAmigo() {

    let incluirAmigo = document.querySelector('input').value;
       if (incluirAmigo.trim() === '' ){
        alert('Por favor, insira o nome de um amigo.');
        return;
    }        

    incluirAmigo = incluirAmigo.charAt(0).toUpperCase() + incluirAmigo.slice(1).toLowerCase();

    if (amigos.includes(incluirAmigo)) {
        alert('Este amigo(a) já está na lista!');
        return;
    }
    
    amigos.push(incluirAmigo);
    listaComHTML();

    resultado.innerHTML = '';
    
    console.log(amigos);
    limparNome ();
    
    }


function listaComHTML() {

    let lista = document.querySelector("#listaAmigos");  
    lista.innerHTML = '';
    for (i = 0; i < amigos.length; i++) {
    
    let novoNaLista = document.createElement('li');
        novoNaLista.textContent = amigos[i];
        lista.appendChild(novoNaLista);
    }
    
}
    
function sortearAmigo()
     {
        let resultado = document.querySelector("#resultado");
    
      
        if (amigos.length === 0) {
            resultado.innerHTML = '<li>Não há amigos disponíveis para sortear, gentiliza adicionar!</li>';
            return;
        }
    
        let amigoAleatorio = Math.floor(Math.random() * amigos.length);

        let amigoSorteado = amigos[amigoAleatorio];
        resultado.innerHTML = `<p>Amigo(a): ${amigoSorteado}</p>`;
        
        localStorage.setItem("amigoSorteado", amigoSorteado);

        window.location.href = "index2.html";
    
    }

function limparNome() {
    document.querySelector('input').value = '';
    document.querySelector('#amigo').focus();
}

