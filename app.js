//Music And Sounds
var m249load = new Audio("sou/csgo/M249.mp3");
var bizonload = new Audio("sou/csgo/bizon.mp3");
var knifeload = new Audio("sou/csgo/knife.mp3");
var p90load = new Audio("sou/csgo/p90.mp3");

//Weapon Variable Names

//Pistol Round Variable Names
var pistolT = ["Glock 18", "P250", "Tec-9/CZ75-Auto", "Dual Berettas", "Desert Eagle/R8 Revolver", "Knife"];
var pistolCT = ["P2000/USP-S", "Five-SeveN/CZ75-Auto", "P250", "Desert Eagle/R8 Revolver", "Dual Berettas", "Knife"];

//All Weapon Variable Names
var weaponNamesT = ["Glock 18", "P250", "Tec-9/CZ75-Auto", "Dual Berettas", "Desert Eagle/R8 Revolver", "MAC-10", "PP-Bizon", "MP7/MP5-SD", "UMP-45", "P90", "Galil AR", "AK-47", "SG 553", "SSG 08", "AWP", "G3SG1", "Nova", "XM1014", "Sawed-Off", "M249", "Negev", "Knife"];
var weaponNamesCT = ["P2000/USP-S", "P250", "Five-SeveN/CZ75-Auto", "Dual Berettas", "Desert Eagle/R8 Revolver", "MP9", "PP-Bizon", "MP7/MP5-SD", "UMP-45", "P90", "FAMAS", "M4A4/M4A1-S", "AUG", "SSG 08", "AWP", "SCAR-20", "Nova", "XM1014", "MAG-7", "M249", "Negev", "Knife"]

//Function To Stop All Music
function stopMusic() {
  bizonload.pause();
  bizonload.currentTime = 0;
  m249load.pause();
  m249load.currentTime = 0;
  p90load.pause();
  p90load.currentTime = 0;
}

//Standard Variables For Weapon Roulette
var pistolRound = false;
var counterTerroristSide = true;

//Random Number Variables
var randomNumPistol;
var randomNumAll;

//Checkbox Loader


function pistolRoundCheck() {
  var pistolRoundCheckBox = document.getElementById("pistolcheck");
  if (pistolRoundCheckBox.checked == true) {
    pistolRound = true;
  } else {
    pistolRound = false;
  }
}

//Team Changer
function teamSwitcher() {
if (counterTerroristSide == true) {
  counterTerroristSide = false;
  document.getElementById('switchteambutton').innerHTML = "Switch to CT";
  document.getElementById('ctbuttonid').style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtkmNj-34BqO0SlUPAMPTOjzjUhiOtTkN97A&usqp=CAU)";
} else if (counterTerroristSide == false) {
  document.getElementById('switchteambutton').innerHTML = "Switch to T";
  document.getElementById('ctbuttonid').style.backgroundImage = "url(https://vignette1.wikia.nocookie.net/cswikia/images/4/4c/Csgo_CT_icon_alt.png/revision/latest?cb=20151222191721)";
  counterTerroristSide = true;

}
}

//OUTDATED
//Terrorist Weapons
/*function weapont() {

  //Only Pistols
if (pistolRoundT == true) {

var randomNumPistolT = Math.floor(Math.random() * 6);
var chosenPistolT = pistolT[randomNumPistolT];
chosenWepT = chosenPistolT;
document.getElementById('twep').innerHTML = chosenWepT;
  pistolRoundT = false;

//All Weapons
} else if (pistolRoundT == false){

  var randomNumAllT = Math.floor(Math.random() * 22);
  var chosenWepT = weaponNamesT[randomNumAllT];
  document.getElementById('twep').innerHTML = chosenWepT;
    document.getElementById('twep').style.backgroundImage = "url(https://imttrade.com/wp-content/uploads/2016/12/white-background-2.jpg)" //Changes Color of text
      bizonload.pause();
      bizonload.currentTime = 0; //Sets time of music to 0
      m249load.pause();
      m249load.currentTime = 0;
}
//M249 Rainbow Text And Music
  if (chosenWepT === "M249") {
    m249load.play();
document.getElementById('twep').innerHTML = "M249 TIME!!";
  document.getElementById('twep').style.backgroundImage = "url(https://i.pinimg.com/originals/e5/89/95/e5899572ecace2b0895b36db7703a001.gif)"
  }

//PP-Bizon Rainbow Text And Music
  if (chosenWepT === "PP-Bizon") {
    bizonload.play();
document.getElementById('twep').innerHTML = "PP-BIZON TIME!!";
  document.getElementById('twep').style.backgroundImage = "url(https://i.pinimg.com/originals/e5/89/95/e5899572ecace2b0895b36db7703a001.gif)"
  }

  if (chosenWepT === "Knife") {
    knifeload.play();
  }
}
*/

//Counter-Terrorist Weapons
function weaponct() {


//All Weapons
  if (pistolRound == true && counterTerroristSide == true) {
  randomNumPistol = Math.floor(Math.random() * 6);
  var chosenWep = pistolCT[randomNumPistol];
  document.getElementById('ctwep').innerHTML = chosenWep;
  document.getElementById('ctwep').style.backgroundImage = "url(img/csgo/blank.jpg)"
  bizonload.pause();
  bizonload.currentTime = 0;
  m249load.pause();
  m249load.currentTime = 0;
  p90load.pause();
  p90load.currentTime = 0;

} else if (pistolRound == true && counterTerroristSide == false){
  randomNumPistol = Math.floor(Math.random() * 6);
  var chosenWep = pistolT[randomNumPistol];
  document.getElementById('ctwep').innerHTML = chosenWep;
  document.getElementById('ctwep').style.backgroundImage = "url(img/csgo/blank.jpg)"
  bizonload.pause();
  bizonload.currentTime = 0;
  m249load.pause();
  m249load.currentTime = 0;
  p90load.pause();
  p90load.currentTime = 0;

} else if (pistolRound == false && counterTerroristSide == true ){
  randomNumAll = Math.floor(Math.random() * 22)
  var chosenWep = weaponNamesCT[randomNumAll];
    document.getElementById('ctwep').style.backgroundImage = "url(img/csgo/blank.jpg)"
  document.getElementById('ctwep').innerHTML = chosenWep;
  bizonload.pause();
  bizonload.currentTime = 0;
  m249load.pause();
  m249load.currentTime = 0;
  p90load.pause();
  p90load.currentTime = 0;

} else if (pistolRound == false && counterTerroristSide == false ){
  randomNumAll = Math.floor(Math.random() * 22)
  var chosenWep = weaponNamesT[randomNumAll];
    document.getElementById('ctwep').style.backgroundImage = "url(img/csgo/blank.jpg)"
  document.getElementById('ctwep').innerHTML = chosenWep;
  bizonload.pause();
  bizonload.currentTime = 0;
  m249load.pause();
  m249load.currentTime = 0;
  p90load.pause();
  p90load.currentTime = 0;

}

//M249 Rainbow Text And Music
   if (chosenWep === "M249") {
    m249load.play();
document.getElementById('ctwep').innerHTML = "M249 TIME!!";
document.getElementById('ctwep').style.backgroundImage = "url(img/csgo/rainbow.gif)"
  }

//PP-Bizon Rainbow Text And Music
  if (chosenWep === "PP-Bizon") {
    bizonload.play();
document.getElementById('ctwep').innerHTML = "PP-BIZON TIME!!";
document.getElementById('ctwep').style.backgroundImage = "url(img/csgo/rainbow.gif)"
  }
//Knife Sound
if (chosenWep === "Knife") {
  knifeload.play();
}
if (chosenWep === "P90") {
  p90load.play();
}
  }



/*Bad Weapon Selector
  if (number == 1) {
    alert("Glock 18");

  } else if (number == 2) {
    alert("P250")

  } else if (number == 3) {
    alert("Tec-9/CZ75-Auto");

  } else if (number == 4) {
    alert("Dual Berettas");

  } else if (number == 5) {
    alert("Desert Eagle/R8 Revolver");

  } else if (number == 6) {
    alert("MAC-10");

  } else if (number == 7) {
    alert("PP-Bizon");

  } else if (number == 8) {
    alert("MP7/MP5-SD");

  } else if (number == 9) {
    alert("UMP-45");

  } else if (number == 10) {
    alert("P90");

  } else if (number == 11) {
    alert("Galil AR")

  } else if (number == 12) {
    alert("AK-47")

  } else if (number == 13) {
    alert("SG 553");

  } else if (number == 14) {
    alert("SSG 08")

  } else if (number == 15) {
    alert("AWP");

  } else if (number == 16) {
    alert("G3SG1");

  } else if (number == 17) {
    alert("Nova");

  } else if (number == 18) {
    alert("XM1014");

  } else if (number == 19) {
    alert("Sawed-Off");

  } else if (number == 20) {
    alert("M249");

  } else if (number == 21) {
    alert("Negev")

  } else if (number == 22) {
    alert("Knife")
  }
}

*/


//Random Map Selector
function mapdecider() {

  //Random Number Generators
  var rand1 = Math.floor(Math.random() * 2);
  var rand2 = Math.floor(Math.random() * 2);
  var rand3 = Math.floor(Math.random() * 2);
  var rand4 = Math.floor(Math.random() * 2);
  var rand5 = Math.floor(Math.random() * 2);
  var rand6 = Math.floor(Math.random() * 2);
  var rand7 = Math.floor(Math.random() * 2);
  var rand8 = Math.floor(Math.random() * 2);
  var rand9 = Math.floor(Math.random() * 2);
  var rand10 = Math.floor(Math.random() * 2);

  //Map Variable Names
  var map1 = ["Mirage ", ""];
  var map2 = ["Inferno ", ""];
  var map3 = ["Overpass ", ""];
  var map4 = ["Vertigo ", ""];
  var map5 = ["Nuke ", ""];
  var map6 = ["Train ", ""];
  var map7 = ["Dust II ", ""];
  var map8 = ["Cache ", ""];
  var map9 = ["Agency ", ""];
  var map10 = ["Office ", ""];

  //Results
  var mir = map1[rand1];
  var inf = map2[rand2];
  var ove = map3[rand3];
  var ver = map4[rand4];
  var nuk = map5[rand5];
  var tra = map6[rand6];
  var dus = map7[rand7];
  var cac = map8[rand8];
  var age = map9[rand9];
  var off = map10[rand10];

  /*Old Alert Message
  alert(mir + inf + ove + ver + nuk + tra + dus + cac + age + off);
  */
  document.getElementById('mapdec').innerHTML = (mir + inf + ove + ver + nuk + tra + dus + cac + age + off);
}



  //Shitbanmanplayer
  var shitbenmen = new Audio("../sou/csgo/sbm.mp3");
  function sbm() {
  shitbenmen.play();
}

function  homeButton() {
  window.open("home.html", "_self");


}
