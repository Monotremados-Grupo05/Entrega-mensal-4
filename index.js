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
    for(a;a<b;a++){                            //For para que inicialmente eu printe apenas 10 elementos, porem quando o usuario apertar
        console.log(resultado[a].title);       //o botao os valores das variaveis irao ser alteradas para que seja printado mais
        dive.innerHTML += `
        <div class="vitrine">
        <img class="fotojogo" src="${resultado[a].thumbnail}">
        <p class="nomedojogo">${resultado[a].title}</p>                 
                            
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
       tag_a[i].style.color = "";
    }
       tag.style.color = "#ff0000";
       
}






const barinhadebaixo = document.querySelector(".barinha-de-baixo");

const inputSearch = document.querySelector(".input[type='pesquisa'");

let nomes = [];


fetch