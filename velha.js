const jogador1 = "X";
const jogador2 = "O";

var vez_do_Jogador = jogador1;
var gameOver = false;

atualizar_jogador_atual();
ComecarJogo();

function atualizar_jogador_atual() {      
 
 if (gameOver){
     return;
}

 let jogador;

 if (vez_do_Jogador == jogador1) {

    jogador = document.getElementById('1nome').value;
 }else{
    jogador =document.getElementById('2nome').value;
 }

    var vez = document.getElementById("vez_do_jogador");
    vez.textContent = jogador.value;
}

function comecar_jogo(){

 var espacos = document.getElementsByClassName('espaco');
 for (var i = 0; i < espacos.length; i++) {

  espacos[i].addEventListener('click', function(){

   if (gameOver) {return;}

   if (this.getElementsByTagName("img").length == 0) {

    if (vez_do_Jogador== jogador1) {
     this.innerHTML = "<img src='jogo-d-velhaa/x.jpg'>";
     this.setAttribute("jogada", jogador1);
     vez_do_Jogador = jogador2;
    }
    else{
     this.innerHTML = "<img src='jogo-d-velhaa/bola.jpg'>";
     this.setAttribute("jogada", jogador2);
     vez_do_Jogador = jogador1;
    }
    atualizar_jogador_atual();
    VerificarVencedor();
   }
  });
 }
}

async function VerificarVencedor() {
 var espacos = document.getElementsByClassName('espaco');
 var espacoId = [];
 var vencedor = "";
 var empate = 0;
 for (var i = 0; i < espacos.length; i++) {
  espacoId[i] = espacos[i].getAttribute("jogada");
 }
 empate = espacoId.indexOf("");

 if((espacoId[0] == espacoId[1]) && (espacoId[0] == espacoId[2]) || (espacoId[0] == espacoId[3]) && (espacoId[0] == espacoId[6]) || (espacoId[0] == espacoId[4]) && (espacoId[0] == espacoId[8])){
  vencedor = espacoId[0];


 }
 else if((espacoId[4] == espacoId[1]) && (espacoId[4] == espacoId[7]) || (espacoId[4] == espacoId[3]) && (espacoId[4] == espacoId[5]) || (espacoId[4] == espacoId[2]) && (espacoId[4] == espacoId[6])){
  vencedor = espacoId[4]; 


 }
 else if((espacoId[8] == espacoId[5]) && (espacoId[8] == espacoId[2]) || (espacoId[8] == espacoId[7]) && (espacoId[8] == espacoId[6])){
  vencedor = espacoId[8];

 }
 else if (empate == -1) {
  gameOver = true;

  await sleep(50);

  alert("Empate !!");

  var valorStyle = "color: white; background: blue;";
  var btnRecomecar = document.getElementById('btnRecomecar');
  btnRecomecar.removeAttribute("disabled");
  btnRecomecar.setAttribute("style", valorStyle);

  btnRecomecar.addEventListener('click', function () {
   window.location.reload();
  });
 }
 if (vencedor != ""){
     terminado = true;
     await sleep(50);
     alert("O vencedor foi o: " + vencedor + "");
 }
}

function sleep(ms){
 return new Promise(resolve => setTimeout(resolve, ms));
}


function botao(){
   window.location.reload();
} 

function button(){
   let jogador;
   jogador = document.querySelector("#primeiro_nome");
   var vez_p = document.getElementById("vez_do_jogador");
   vez_p.textContent = jogador.value;
}
