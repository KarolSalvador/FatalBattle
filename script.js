function iniciarLuta() {
    const fightBtn = document.getElementById("fightBtn");
    fightBtn.disabled = true;
    let jogarNovamente = true;
    
    //lista para armazenar personagens escolhidos
    let personagem = ["", "", ""]; //array guarda 3 textos
    let forcaPersonagem = 0;
  
    for(let i = 0; i < 3; i++) {
      escolhaPersonagem = prompt("Digite o nome do personagem " + (i + 1));
      personagem[i] = escolhaPersonagem;
  
      //calcular a força de cada jogador e somar para ser a força do time
      forcaPersonagem += Math.floor(Math.random() * 10) + 1;
    }
  
  
    //criar lista de 3 vilões
    let viloes = ["", "", ""];
    let forcaViloes = 0;
  
    console.log("Inicio vilões: " + viloes);
    for(let i = 0; i < 3; i++) {
      indiceAleatorio = Math.floor(Math.random() * 21);
      viloesPossiveis = [
        "Shang Tsung",
        "Shao Kahn",
        "Kano",
        "Sub-Zero",
        "Scorpion",
        "Liu Kang",
        "Raiden",
        "Quan Chi",
        "Reptile",
        "Mileena",
        "Kitana",
        "Baraka",
        "Fujin",
        "Sindel",
        "Ermac",
        "Shinnok",
        "Onaga",
        "D'Vorah",
        "Kotal Kahn",
        "Goro",
        "Kintaro" 
      ]
      viloes[i] = viloesPossiveis[indiceAleatorio];
  
      //calcular força dos vilões
      forcaViloes += Math.floor(Math.random() * 10) + 1; 
    }
    console.log("Fim vilões: " + viloes);
  
    //mostrar times
    alert("FIGHT -- "+personagem+" x "+viloes+".");
  
    //comparar para ver quem vence
    if(forcaPersonagem > forcaViloes) {
      alert("VITÓRIA, seu time foi o mais forte.\n Força do seu time: "+forcaPersonagem+". Força adversário: "+forcaViloes+".");
    } else {
      if(forcaPersonagem < forcaViloes) {
        alert("Seu time PERDEU! Força do seu time: "+forcaPersonagem+". \nForça time máquina: "+forcaViloes+".");     
      } else {
        alert("EMPATE! Os dois times tem a mesma força. Força do seu time: "+forcaPersonagem+". \nForça time máquina: "+forcaViloes+".")
      }
    }
    
    jogarNovamente = confirm("Deseja jogar novamente?");
    if(jogarNovamente) {
      iniciarLuta();
    }
    
    fightBtn.disabled = false;
  }
  
  