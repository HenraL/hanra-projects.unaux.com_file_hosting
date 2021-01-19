// setting main variables
var xx=0;
var cc=0;
var bb=1;
// applying setting to the different spans on the page
document.getElementById('E').value=xx;
document.getElementById('e').innerHTML=xx;
document.getElementById('C').value=cc;
document.getElementById('c').innerHTML=cc;
document.getElementById('Aa').value=bb;
document.getElementById('aa').innerHTML=bb;
console.log("&copy; Cr&eacute;&eacute; par Henry Letellier");
// Innitialising the euro function
function euro(){
  xx=document.getElementById('E').value;
  document.getElementById('e').innerHTML=xx;
  console.log("xx="+xx);
console.log("&copy; Cr&eacute;&eacute; par Henry Letellier");
};
//  Innitialising the reset function for the euro function
function reseteuro(){
  document.getElementById('E').value=0;
  xx=0;
  document.getElementById('e').innerHTML=xx;
console.log("&copy; Cr&eacute;&eacute; par Henry Letellier");
};
// Innitialising the centime function
function centimes(){
  cc=document.getElementById('C').value;
  document.getElementById('c').innerHTML=cc;
  console.log("cc="+cc);
console.log("&copy; Cr&eacute;&eacute; par Henry Letellier");
};
// Innitialising the reset function for the centime function
function resetCentimes(){
  document.getElementById('C').value=0;
  cc=0;
  document.getElementById('c').innerHTML=cc;
console.log("&copy; Cr&eacute;&eacute; par Henry Letellier");
};

// Defining the buttons Quick shortcuts
// Defining incrementor ac()
function ac(){
  bb=document.getElementById('Aa').value;
document.getElementById('Ac10').innerHTML=bb;
document.getElementById('Ac100').innerHTML=bb;
document.getElementById('Ac1000').innerHTML=bb;
document.getElementById('Ac10c').innerHTML=bb;
document.getElementById('Ac100c').innerHTML=bb;
document.getElementById('aa').innerHTML=bb;
console.log("bb="+bb);
console.log("&copy; Cr&eacute;&eacute; par Henry Letellier");
};
// Defining button +10€
function add10(){
        xx+=(bb*10);
document.getElementById('E').value=xx;
document.getElementById('e').innerHTML=xx;
console.log("&copy; Cr&eacute;&eacute; par Henry Letellier");
}
// Defining button +100€
function add100(){
        xx+=(bb*100);
document.getElementById('E').value=xx;
document.getElementById('e').innerHTML=xx;
console.log("&copy; Cr&eacute;&eacute; par Henry Letellier");
}
// Defining button +1000€
function add1000(){
        xx+=(bb*1000);
document.getElementById('E').value=xx;
document.getElementById('e').innerHTML=xx;
console.log("&copy; Cr&eacute;&eacute; par Henry Letellier");
}
// Defining button +10₵
function add10c(){
        cc+=(bb*10);
document.getElementById('C').value=cc;
document.getElementById('c').innerHTML=cc;
console.log("&copy; Cr&eacute;&eacute; par Henry Letellier");
}
// Defining button +100₵
function add100c(){
        cc+=(bb*100);
document.getElementById('C').value=cc;
document.getElementById('c').innerHTML=cc;
console.log("&copy; Cr&eacute;&eacute; par Henry Letellier");
}

// Creating the calc script (main of the program)
function calc(){
// Defining the internal variables for the funciton calc()
  var rendu50c=0;
  var rendu20c=0;
  var rendu10c=0;
  var rendu5c=0;
  var rendu2c=0;
  var rendu1c=0;
  var rendu500=0;
  var rendu200=0;
  var rendu100=0;
  var rendu50=0;
  var rendu20=0;
  var rendu10=0;
  var rendu5=0;
  var rendu2=0;
  var rendu=0;
  var someInCent=cc;
  var someInEur=xx;
  // alert(someInCent); //If you wish to know the amount of entered cetimes
  // alert(someInEur); //If you wish to know the amount of entered euros
// Defining the loops to calculate the amount of centimes to return
// Loop to check if centimes equal 0
  if (someInCent===0){
    someInCent=0;
    document.getElementById('c').innerHTML=someInCent;
    document.getElementById("c1").innerHTML=rendu1c;
    document.getElementById("c2").innerHTML=rendu2c;
    document.getElementById("c5").innerHTML=rendu5c;
    document.getElementById("c10").innerHTML=rendu10c;
    document.getElementById("c20").innerHTML=rendu20c;
    document.getElementById("c50").innerHTML=rendu50c;
    document.getElementById("cs1").innerHTML=rendu1c;
    document.getElementById("cs2").innerHTML=rendu2c;
    document.getElementById("cs5").innerHTML=rendu5c;
    document.getElementById("cs10").innerHTML=rendu10c;
    document.getElementById("cs20").innerHTML=rendu20c;
    document.getElementById("cs50").innerHTML=rendu50c;
    console.log("calcule des centimes terminé")
    console.log("&copy; Cr&eacute;&eacute; par Henry Letellier");
   }
// Script to calculate the amount of centimes and which centimes the program must return
  while (someInCent>0){
    while (someInCent>=50){
      someInCent-=50;
      rendu50c+=1;
      if (rendu50c===2){
        rendu50c-=2;
        someInEur+=1;
      }
    }
    while (someInCent>=20){
      someInCent-=20;
      rendu20c+=1;
    }
    while (someInCent>=10){
      someInCent-=10;
      rendu10c+=1;
    }
    while (someInCent>=5){
      someInCent-=5;
      rendu5c+=1;
    }
    while (someInCent>=2){
      someInCent-=2;
      rendu2c+=1;
    }
    while (someInCent>=1){
      someInCent-=1;
      rendu1c+=1;
    }
    if (someInCent===0){
      if (someInCent===0){
        console.log("Finished calculating the amount of centimes");
        document.getElementById("c1").innerHTML=rendu1c;
        document.getElementById("c2").innerHTML=rendu2c;
        document.getElementById("c5").innerHTML=rendu5c;
        document.getElementById("c10").innerHTML=rendu10c;
        document.getElementById("c20").innerHTML=rendu20c;
        document.getElementById("c50").innerHTML=rendu50c;
        document.getElementById("cs1").innerHTML=rendu1c;
        document.getElementById("cs2").innerHTML=rendu2c;
        document.getElementById("cs5").innerHTML=rendu5c;
        document.getElementById("cs10").innerHTML=rendu10c;
        document.getElementById("cs20").innerHTML=rendu20c;
        document.getElementById("cs50").innerHTML=rendu50c;
        console.log("&copy; Cr&eacute;&eacute; par Henry Letellier");
      }
    }
  }
// Defining the loops to calculate the amount of centimes to return
// Loops to make sure the amount of euros aren't equal to 0
  if (someInEur===0){
    someInEur=0;
    document.getElementById('e').innerHTML=someInEur;
    document.getElementById("e1").innerHTML=rendu;
    document.getElementById("e2").innerHTML=rendu2;
    document.getElementById("e5").innerHTML=rendu5;
    document.getElementById("e10").innerHTML=rendu10;
    document.getElementById("e20").innerHTML=rendu20;
    document.getElementById("e50").innerHTML=rendu50;
    document.getElementById("e100").innerHTML=rendu100;
    document.getElementById("e200").innerHTML=rendu200;
    document.getElementById("e500").innerHTML=rendu500;
    document.getElementById("es1").innerHTML=rendu;
    document.getElementById("es2").innerHTML=rendu2;
    document.getElementById("es5").innerHTML=rendu5;
    document.getElementById("es10").innerHTML=rendu10;
    document.getElementById("es20").innerHTML=rendu20;
    document.getElementById("es50").innerHTML=rendu50;
    document.getElementById("es100").innerHTML=rendu100;
    document.getElementById("es200").innerHTML=rendu200;
    document.getElementById("es500").innerHTML=rendu500;
    console.log("Calcule des euros terminé");
    console.log("&copy; Cr&eacute;&eacute; par Henry Letellier");
  
  }
// script to calculate the amount of euros and which euros the program must return
   while (someInEur>0){
    while (someInEur>=500){someInEur-=500;rendu500+=1;}
    while (someInEur>=200){someInEur-=200;rendu200+=1;}
    while (someInEur>=100){someInEur-=100;rendu100+=1;}
    while (someInEur>=50){someInEur-=50;rendu50+=1;}
    while (someInEur>=20){someInEur-=20;rendu20+=1;}
    while (someInEur>=10){someInEur-=10;rendu10+=1;}
    while (someInEur>=5){someInEur-=5;rendu5+=1;}
    while (someInEur>=2){someInEur-=2;rendu2+=1;}
    while (someInEur>=1){someInEur-=1;rendu+=1;}
   }
    if (someInEur===0){
      document.getElementById("e1").innerHTML=rendu;
      document.getElementById("e2").innerHTML=rendu2;
      document.getElementById("e5").innerHTML=rendu5;
      document.getElementById("e10").innerHTML=rendu10;
      document.getElementById("e20").innerHTML=rendu20;
      document.getElementById("e50").innerHTML=rendu50;
      document.getElementById("e100").innerHTML=rendu100;
      document.getElementById("e200").innerHTML=rendu200;
      document.getElementById("e500").innerHTML=rendu500;
      document.getElementById("es1").innerHTML=rendu;
      document.getElementById("es2").innerHTML=rendu2;
      document.getElementById("es5").innerHTML=rendu5;
      document.getElementById("es10").innerHTML=rendu10;
      document.getElementById("es20").innerHTML=rendu20;
      document.getElementById("es50").innerHTML=rendu50;
      document.getElementById("es100").innerHTML=rendu100;
      document.getElementById("es200").innerHTML=rendu200;
      document.getElementById("es500").innerHTML=rendu500;
      console.log("Calcule des euros terminé");
      console.log("&copy; Cr&eacute;&eacute; par Henry Letellier");
    }
  alert("🎉Fini! 🎉");
}
function h(){
  var ff=xx;
  var hidden_message="🎉Bravo vous avez activé le message caché🎉";
  if (ff===0){
     console.log("🙂😔🙂🙂👍🏻🙂👍🐱🙂🙂🥺👍👍👍🙂💑🙂🙂🙂🙂😿😿😿😿🙂🙂😹👍🏻🙂🙂🐱💑🤣🙂😊😊😊💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑💑🚶‍♂👍🙂😫👍🙂💑😹😂😅🙂😋😋😋🍔🍔🍟🙂🙂🙂😋🙂😋🍟🍟🍟🍟🍟🍟🙂🥺😱🙀🙂🙂🥺😭😶😶😋😍🍔🍟🙂🙂👍😭🙂😋😋😋🍔🍔🍔🙂🙂🙀😱😱😱😱😱😱🙂😋😋😋😋🐱👌👍🏻👍🏻🙂🙂🤣😹🥺🙂😴😑🙂😹🙂😹🙀🙂🙀🙀🙀🙀🙀😹😹😋😋😋😋🙂😹😹😹😹😹😹😑🙂🙂👍😹🙂😋😹😹😹😹😹😹🙀😻💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 💑 🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺😻😻😻😻😻😻😻😻😻😻🙂😹");
     document.getElementById("e0").innerHTML=hidden_message;
     console.log(hidden_message);
     alert(hidden_message);
   }
}

// python script that alowed me to think on how to program the greedy algorithm
// while (someInEur>0):
//     if someineur>1:
//         if someineur>2:
//             if someineur>5:
//                 if someineur>10:
//                     if someineur>20:
//                         if someineur>50:
//                             if someineur>100:
//                                 if someineur>200:
//                                     if someineur>500:
//                                         someineur-=500
//                                         rendu500+=1
//                                     else:
//                                         someineur-=200
//                                         rendu200+=1
//                                 else:
//                                     someineur-100
//                                     rendu100+=1
//                             else:
//                                 someineur-=50
//                                 rendu50+=1
//                         else:
//                             someineur-=20
//                             rendu20+=1
//                     else:
//                         someineur-=10
//                         rendu10+=1
//                 else:
//                     someineur-=5
//                     rendu5+=1
//             else:
//                 someineur-=2
//                 rendu2+=1
//         else:
//             someineur-=1
//             rendu+=1
//     elif someineur==0:
//         print("calcule des euros terminé")
//     else:
//         print(someineur)
// }
  
// someineur=int(input("Quel est le montant à rendre (en €): "))
// someincent=int(input("Quel est le montant à rendre (en centimes): ")) #en html à limiter à 100
// monnaiecent=[1,2,5,10,20,50]
// monnaieeur=[1,2,5,10,20,100,200,500]
// rendu50c=rendu20c=rendu10c=rendu5c=rendu1c=rendu500=rendu200=rendu100=rendu50=rendu20=rendu10=rendu5=rendu2=rendu=0
// #888
// while (someincent>0):
//     if someincent>1:
//         if someincent>2:
//             if someincent>5:
//                 if someincent>10:
//                     if someincent>20:
//                         if someincent>50:
//                            someincent-=50
//                            rendu50c+=1
//                     else:
//                         someincent-=20
//                         rendu20c+=1
//                 else:
//                     someincent-=10
//                     rendu10c+=1
//             else:
//                 someincent-=5
//                 rendu5c+=1
//         else:
//             someincent-=2
//             rendu2c+=1
//     else:
//         someincent-=1
//         rendu1c+=1
                            
// else:
//     if rendu50c==2:
//         rendu50c=0
//         rendu+=1
//         print("Le calcule des centimes est terminé.")
//         someincent=0
//     elif someincent==0:
//         print("Le calcule des centimes est terminé.")
//         print(someincent)
//     else:
//         print(someincent)


// while someineur>0:
//     if someineur>1:
//         if someineur>2:
//             if someineur>5:
//                 if someineur>10:
//                     if someineur>20:
//                         if someineur>50:
//                             if someineur>100:
//                                 if someineur>200:
//                                     if someineur>500:
//                                         someineur-=500
//                                         rendu500+=1
//                                     else:
//                                         someineur-=200
//                                         rendu200+=1
//                                 else:
//                                     someineur-100
//                                     rendu100+=1
//                             else:
//                                 someineur-=50
//                                 rendu50+=1
//                         else:
//                             someineur-=20
//                             rendu20+=1
//                     else:
//                         someineur-=10
//                         rendu10+=1
//                 else:
//                     someineur-=5
//                     rendu5+=1
//             else:
//                 someineur-=2
//                 rendu2+=1
//         else:
//             someineur-=1
//             rendu+=1
//     elif someineur==0:
//         print("calcule des euros terminé")
//     else:
//         print(someineur)