//Music
var m249load = new Audio("snd/M249.mp3");
var bizonload = new Audio("snd/bizon.mp3");


//Terrorist Weapons
function weapont() {

  var randomNum = Math.floor(Math.random() * 22);
  var weaponNames = ["Glock 18", "P250", "Tec-9/CZ75-Auto", "Dual Berettas", "Desert Eagle/R8 Revolver", "MAC-10", "PP-Bizon", "MP7/MP5-SD", "UMP-45", "P90", "Galil AR", "AK-47", "SG 553", "SSG 08", "AWP", "G3SG1", "Nova", "XM1014", "Sawed-Off", "M249", "NEGEV", "Knife"];
  var chosenWepT = weaponNames[randomNum];
  document.getElementById('twep').innerHTML = chosenWepT;

  if (chosenWepT === "M249") {
    m249load.play();
  }
  if (chosenWepT === "PP-Bizon") {
    bizonload.play();

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

//Counter-Terrorist Weapons
function weaponct() {
  var randomNum2 = Math.floor(Math.random() * 22)
  var number2 = ["P2000/USP-S", "P250", "Five-SeveN/CZ75-Auto", "Dual Berettas", "Desert Eagle/R8 Revolver", "MP9", "PP-Bizon", "MP7/MP5-SD", "UMP-45", "P90", "FAMAS", "M4A4/M4A1-S", "AUG", "SSG 08", "AWP", "SCAR-20", "Nova", "XM1014", "MAG-7", "M249", "Negev", "Knife"]
  var weaponSel = number2[randomNum2];
  document.getElementById('ctwep').innerHTML = weaponSel;
  if (weaponSel === "M249") {
    m249load.play();

  }

  if (weaponSel === "PP-Bizon"); {
    bizonload.play();
  }

  }



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
  var shitbenmen = new Audio("sbm/sbm.mp3");
  function sbm() {
  shitbenmen.play();
}


function stopmusic() {
  bizonload.pause();
  bizonload.currentTime = 0;
  m249load.pause();
  m249load.currentTime = 0;
}
