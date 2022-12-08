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


function consultaDadosViaCep(){                //funcao que realiza o fetch
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
	.then((response) => {
        response.json()                        //Transformo os dados em json
            .then(data => printar(data));      // envio os dados chamando funcao printar indicando o parametro data (sendo os proprios dados)
    })
        .catch(()=> alert("ERRO"));            //Alerta de erro, caso encontre algum
}

const printar = (resultado) =>{                //Funcao que printa os dados da API na tela do usuario
    for(a;a<b;a++){                            //For para que inicialmente eu printe apenas 10 elementos, porem quando o usuario apertar
        console.log(resultado[a].title);       //o botao os valores das variaveis irao ser alteradas para que seja printado mais
        dive.innerHTML += `<p>${resultado[a].title}</p>                 
                            <img src="${resultado[a].thumbnail}">`
    }                                          //Dentro do for eu uso a variavel dive e altero o conteudo do 
    }                                          //HTML dela, inserindo o nome do jogo,imagem e link para o site      
    function apagar(){
        dive.innerHTML = "";                  //Funcao para apagar o conteudo escrito dentro do HTML da variavel dive, utilizado para caso
    }                                         //o usuario modifique o padrao de aparecimento sei la vai apagar tudo e escrever de outro jeito

    consultaDadosViaCep();                   //Aqui nesse caso eu to chamando a funcao apenas

    function adicionar(){                   //Funcao adicionar para alterar as variaveis que definem a quantidade de jogos que irao aparecer
    a = b;                                  // na tela do usuario, ela eh chamada ao clicar no botao carregar mais
    b = b+10;                               //Alem de alterar as variaveis ela chama a funcao consultardadosviacep pra printar novamente
    consultaDadosViaCep();
}

    