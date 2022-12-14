const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3b7746506fmsh534fe729d2539dbp1e4658jsnb3b810395294',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};                                             //Logando na API pra receber os dados
//-----------------------------------------------------------------------------VARIAVEIS--------------------------------------------------------
const dive = document.getElementById("dive");  //variavel que recebe o getelementbyid para nao ter que ficar escrevendo isso toda vez
var jogo = 0;                                     //variavel para controle de quantidade de jogos que irao aparecer na tela
var contador = 10;                                    //variavel para controle de quantidade de jogos que irao aparecer na tela
var filtro_escolhido="";                                //Variavel para definir os filtros 
var plataforma_escolhida="all";                             //Variavel para definir a plataforma
var i=0,j=0;                                                    //Variaveis de controle da quantidade dos favoritos
var Favoritos = [];                                                 //Array para salvar os favoritos
//--------------------------------------------------------------------------------PRINTS NA TELA---------------------------------------------------------------
const printar = (resultado) =>{                //Funcao que printa os dados da API na tela do usuario
    for(jogo;jogo<contador;jogo++){            //For para que inicialmente eu printe apenas 10 elementos, porem quando o usuario apertar o botao os valores das variaveis irao ser alteradas para que seja printado mais
        dive.innerHTML += 
        `<p>${resultado[jogo].title}</p>
        <img src="imagens/estrelab.png" id="coracao" value=1 onclick="Favoritar(${resultado[jogo].id})"><a href="${resultado[jogo].freetogame_profile_url}"target="_blank">
        <img id="imagens" src="${resultado[jogo].thumbnail}">`
    }  
} 

const printar_fav = (resultado) =>{
    dive.innerHTML += 
    `<p>${resultado.title}</p>
    <img src="imagens/estrelab.png" id="coracao" value=1 onclick="Favoritar(${resultado.id})"><a href="${resultado.freetogame_profile_url}"target="_blank">
    <img id="imagens" src="${resultado.thumbnail}">`
}                                             

ConsultarJogos();                         //Aqui nesse caso eu to chamando a funcao apenas


//-----------------------------------------------------------------------------FUNCOES--------------------------------------------------------
function ConsultarJogos(){                //funcao que realiza o fetch
    fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${plataforma_escolhida}${filtro_escolhido}`, options)
	.then((response) => {
        response.json()                        //Transformo os dados em json
            .then(data => printar(data));      // envio os dados chamando funcao printar indicando o parametro data (sendo os proprios dados)
    })
        .catch(()=> alert("ERRO"));            //Alerta de erro, caso encontre algum
}

function ConsultarJogos_fav(juguete){              
    fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${Favoritos[juguete]}}`, options)
	.then((response) => {
        response.json()                        
            .then(data => printar_fav(data));      
    })
        .catch(()=> alert("ERRO"));        
}

function apagar(){
        dive.innerHTML = "";                  //Funcao para apagar o conteudo escrito dentro do HTML da variavel dive, utilizado para caso
        jogo=0; contador=10;
}                                         //o usuario modifique o padrao de aparecimento vai apagar tudo e escrever de outro jeito

function adicionar(){                   //Funcao adicionar para alterar as variaveis que definem a quantidade de jogos que irao aparecer
    jogo = contador;                                  // na tela do usuario, ela eh chamada ao clicar no botao carregar mais
    contador+=10;                               //Alem de alterar as variaveis ela chama a funcao consultarjogos pra printar novamente
    ConsultarJogos();
}

function filtrar(filtro_botao){
    switch(filtro_botao){
        case('Home'):
            filtro_escolhido = "&sort-by=popularity";
            apagar();
            ConsultarJogos();
        break;
    
        case('Moba'):
            filtro_escolhido = "&category=moba";
            apagar();
            ConsultarJogos();
        break;

        case('Survival'):
            filtro_escolhido = "&category=survival";
            apagar();
            ConsultarJogos();
        break;

        case('Fighting'):
            filtro_escolhido = "&category=fighting";
            apagar();
            ConsultarJogos();
        break;
    
        case('Shooting'):
        filtro_escolhido = "&category=shooter";
        apagar();
        ConsultarJogos();
        break;

        case('Fantasy'):
        filtro_escolhido = "&category=fantasy";
        apagar();
        ConsultarJogos();
        break;

        case('Card game'):
        filtro_escolhido = "&category=card";
        apagar();
        ConsultarJogos();
        break;

        case('Strategy'):
            filtro_escolhido = "&category=strategy";
            apagar();
            ConsultarJogos();
        break;

        case('Sports'):
        filtro_escolhido = "&category=sports";
        apagar();
        ConsultarJogos();
        break;
    }
    
} 

function plataforma(filtro_plataforma){
    switch(filtro_plataforma){
        case('PC'):
        plataforma_escolhida="pc";
        apagar();
        ConsultarJogos();
        break;

        case('Browser'):
        plataforma_escolhida="browser";
        apagar();
        ConsultarJogos();
        break;

        case('ALL'):
        plataforma_escolhida="all";
        apagar();
        ConsultarJogos();
        break;

        case('Reset'):
        filtro_escolhido="";
        plataforma_escolhida="all";
        apagar();
        ConsultarJogos();
        break;
    }
}

function Favoritar(identificador){
Favoritos[i] = identificador;
console.log(Favoritos[i]);
i++;
j=i;
}

function Jogos_fav(){
    apagar();
    for(i=0;i<j;i++){
        ConsultarJogos_fav(i);
    }
}
