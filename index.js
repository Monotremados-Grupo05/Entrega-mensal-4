const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3b7746506fmsh534fe729d2539dbp1e4658jsnb3b810395294',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};                                             //Logando na API pra receber os dados

const dive = document.getElementById("dive");  //variavel que recebe o getelementbyid para nao ter que ficar escrevendo isso toda vez
var a = 0;                                     //variavel para controle de quantidade de jogos que irao aparecer na tela
var b = 10;                                    //variavel para controle de quantidade de jogos que irao aparecer na tela
var filtro_escolhido=""

var favoritos = JSON.parse(localStorage.getItem('favs')) || [];
var resultados = []

function updateLocalStorage() {
    localStorage.setItem('favs', JSON.stringify(favoritos));
}

function isInFavorite(id) {
    for(i=0; i < favoritos.length; i++) {   
        if(id === favoritos[i].id) {
            return true
        }
    }
    return false
}

function handleFavClick(index, btnid) {
   for(i=0; i < favoritos.length; i++) {
        if(resultados[index].id === favoritos[i].id) {
            favoritos.splice(i, 1);
            document.getElementById(btnid).setAttribute("fill", "none")
            updateLocalStorage();
            return
        }
   }
   document.getElementById(btnid).setAttribute("fill", "#FFFFFF")
   favoritos.push(resultados[index])
   updateLocalStorage();

}


const name = document.querySelector(".textopc");

function consultaDadosViaCep(){                //funcao que realiza o fetch
    fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games${filtro_escolhido}`, options)
	.then((response) => {
        response.json()                        //Transformo os dados em json
            .then(data => printar(data));      // envio os dados chamando funcao printar indicando o parametro data (sendo os proprios dados)
    })
        .catch(()=> alert("ERRO"));            //Alerta de erro, caso encontre algum
}

const printar = (resultado) =>{                //Funcao que printa os dados da API na tela do usuario
    for(a;a<b;a++){            
        resultados = resultado                //For para que inicialmente eu printe apenas 10 elementos, porem quando o usuario apertar
        console.log(resultado[a]);       //o botao os valores das variaveis irao ser alteradas para que seja printado mais
        dive.innerHTML += `
        <div class="vitrine">
        <img class="fotojogo" src="${resultado[a].thumbnail}">
        <div class="card-base-container"> 
        <p class="nomedojogo">${resultado[a].title}</p> 
        <button class="like-btn" onClick="handleFavClick(${a},${resultado[a].id})">
            <svg id="${resultado[a].id}" 
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="${isInFavorite(resultado[a].id) ? "#FFFFFF" : "none"}" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg> 
        </button>

            
        <div>
                           
        </div>`
    }        
                                          //Dentro do for eu uso a variavel dive e altero o conteudo do 
    }                                          //HTML dela, inserindo o nome do jogo,imagem e link para o site      
    function apagar(){
        dive.innerHTML = "";                  //Funcao para apagar o conteudo escrito dentro do HTML da variavel dive, utilizado para caso
        a=0; b=10;
    }                                         //o usuario modifique o padrao de aparecimento sei la vai apagar tudo e escrever de outro jeito

    consultaDadosViaCep();                   //Aqui nesse caso eu to chamando a funcao apenas

    function adicionar(){                   //Funcao adicionar para alterar as variaveis que definem a quantidade de jogos que irao aparecer
    a = b;                                  // na tela do usuario, ela eh chamada ao clicar no botao carregar mais
    b = b+10;                               //Alem de alterar as variaveis ela chama a funcao consultardadosviacep pra printar novamente
    consultaDadosViaCep();
}
function filtrar(filtro_botao){
    console.log(filtro_botao);

    switch(filtro_botao){
    
        case('Moba'):
            filtro_escolhido = "?category=moba";
            apagar();
            consultaDadosViaCep();
        break;

        case('Survival'):
            filtro_escolhido = "?category=survival";
            apagar();
            consultaDadosViaCep();
        break;

        case('Fighting'):
            filtro_escolhido = "?category=fighting";
            apagar();
            consultaDadosViaCep();
        break;
    
        case('Shooting'):
        filtro_escolhido = "?category=shooter";
        apagar();
        consultaDadosViaCep();
        break;

        case('Fantasy'):
        filtro_escolhido = "?category=fantasy";
        apagar();
        consultaDadosViaCep();
        break;

        case('Card game'):
        filtro_escolhido = "?category=card";
        apagar();
        consultaDadosViaCep();
        break;

        case('Strategy'):
            filtro_escolhido = "?category=strategy";
            apagar();
            consultaDadosViaCep();
        break;

        case('Sports'):
        filtro_escolhido = "?category=sports";
        apagar();
        consultaDadosViaCep();
        break;


    }
    
} 

function mostrarAtivo(tag){
    var tag_li = document.getElementById('lista_menu');
    var tag_a = tag_li.getElementsByTagName('a');
    for (i=0; i<tag_a.length; i++ )
    {
       tag_a[i].style.backgroundColor = "";
    }
       tag.style.backgroundColor = "#660920";
       
}