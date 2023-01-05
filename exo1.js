// initialiser x, y, et z
// tant que 10 * x > y :
//     x = (y * z) % 10000
//     y = (3 * z) % 10000
//     z = (7 * z) % 10000 
// afficher les navi-composantes : x, y, z

// Exo 1 de pydefi

let x = 997;
let y = 312;
let z = 663;

while (10 * x > y) {
    x = (y * z) % 10000;
    y = (3 * z) % 10000;
    z = (7 * z) % 10000;

}
console.log(x, y, z);

// Exo 2 de pydefi


function sommesExoDeux(a) {
    let somme = 0;
    for (let i = 0; i < a; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somme += i;
        }
    }
    return somme;
}
console.log(sommesExoDeux(1435));

// Exo 3 de pydefi


let aaa;
function numDeBombe(u, n) {
    for (let i = 0; i < n; i++) {
        u = (u * 13) % 1000;
    }
    return u
}

console.log(numDeBombe(797, 114))

// coupez le numéro de série en 2. Les trois premiers chiffres forment le nombre U et les 3 derniers le nombre N
// répétez N fois les opérations 4 et 5 suivantes en partant du nombre U
// multipliez ce nombre par 13
// ne conservez que les 3 derniers chiffres.


// Exo 4 de pydefi




function testBoeuf() {
    for (let blanc = 0; blanc < 1000; blanc++) {
        for (let roux = blanc + 1; roux < 1000; roux++) {
            for (let noir = roux + 1; noir < blanc * 2; noir++) {
                if ((blanc * roux * noir) === ((blanc + roux + noir) * 777) && blanc + roux + noir < 1000) {
                    console.log([blanc, roux, noir]);
                }
            }
        }
    }
}





// Exo 5 de pydefi


let etagesPommes;

function pommesAEmporter(etage) {
    let pommes = 0;
    for (let i = 0; i <= etage; i++) {
        etagesPommes = i ** 2;
        if (etagesPommes % 3 === 0) {
            pommes = etagesPommes + pommes;
        }
    }
    return pommes;
}

console.log(pommesAEmporter(50))



//exo 5 pydefi


const tableauAltitudes = [0, 20, 10, 120, 40, 170, 40, 60, 50, 100, 50, 180, 170, 180, 80, 130, 10, 150, 120, 130, 80, 170, 60, 110, 10, 60, 20, 180, 40, 50, 10, 70, 40, 190, 80, 130, 110, 190, 60, 170, 10, 200, 20, 50, 20, 180, 30, 70, 30, 130, 80, 120, 100, 140, 100, 110, 70, 170, 160, 180, 170, 200, 50, 170, 100, 130, 60, 70, 10, 180, 150, 180, 100, 140, 110, 120, 60, 100, 90, 180, 160, 190, 80, 90, 80, 90, 60, 90, 30, 80, 70, 110, 10, 110, 60, 70, 50, 180, 90, 140, 70, 160, 90, 200, 110, 160, 110, 150, 30, 100, 50, 120, 30, 160, 150, 200, 40, 120, 40, 90, 50, 170, 60, 140, 60, 150, 110, 200, 120, 130, 20, 110, 100, 170, 20, 200, 130, 180, 70, 140, 20, 30, 20, 90, 50, 80, 60, 110, 50, 120, 30, 180, 160, 170, 140, 180, 100, 170, 20, 130, 50, 100, 70, 190, 170, 200, 180, 190, 30, 50, 30, 40, 30, 150, 30, 70, 20, 180, 40, 60, 50, 190, 70, 170, 90, 150, 30, 100, 60, 100, 10, 60, 20, 150, 130, 180, 140, 190, 70, 150, 140, 180, 0];

function calculerNombPierres(testPierre) {

    let cailloux = 0;
    for (let i = 0; i < testPierre.length - 1; i++) {
        if (testPierre[i] > testPierre[i + 1]) {
            cailloux += (testPierre[i] - testPierre[i+1])/10+1; 
        }   
    }
    return cailloux; 
      
}
console.log(calculerNombPierres(tableauAltitudes))

const tableauExo = [0, 50, 40, 100, 70, 90, 0];
console.log(calculerNombPierres(tableauExo));





//exo 6 Lion

let dieuxYouss = ['ARTEMIS','ASCLEPIOS','ATHENA','ATLAS','CHARON','CHIRON','CRONOS','DEMETER','EOS','ERIS','EROS','GAIA','HADES','HECATE','HEPHAISTOS','HERA','HERMES','HESTIA','HYGIE','LETO','MAIA','METIS','MNEMOSYNE','NYX','OCEANOS','OURANOS','PAN','PERSEPHONE','POSEIDON','RHADAMANTHE', 'SELENE','THEMIS','THETIS','TRITON','ZEUS'];

// let dico = {'A': 1, 'B': 2 };

console.log(dieuxYouss);
function comparaison(word1, word2){
    return conversionMot(word1) - conversionMot(word2);
    
}

function conversionMot(word){
    let somme = 0;
    for (let i = 0 ; i < word.length ; i++){
       somme = (word.charCodeAt(i)- 64) + somme;
    }
    return somme;
}
console.log(dieuxYouss.sort(comparaison));
// console.log(conversionMot('AABAAAAA'));
// console.log('R'.charCodeAt(0) - 64);


// Exo niveau 2 MESSAGE DU WITCHER

function minuscule(truc) {
    return truc.toLowerCase();
  }

let parchemin = 'yYyYjJpPEviIzeExXZxgGwWjkKJXmMxXVvVkqQoOagxXGeEAoOpPtTntTNnNKjtTxXwWgGJunjJdDoONUspPSutTtgGTUhHqlLrRQmuUjJnwfFWNxXpzZPyYlLzZMoOnweEfFWkwpPjJWnNxXKyYjJyYfFuUicbBCcCpuUoOPoeEoOsgwWsaAsSSjJGkKeEnNSpPvVsmyYMoOsSSOxXdyqQzZmMmMYnNDd';
//   console.log(minuscule(parchemin));
//   const parchemin2 = 'mzzfiifmmppizwwzkbbyykffjjkkussbbupllqissllddiqpnrrnuuuusgkkffddgsxhhmmmmxggjaajpzzpeeppnnpncmminniwppwffcccnpnqqxxneqqhhraeffedkkdpmmparaqqqqikjjkmmooirrppoonnmyymffxxkoosskzzweffewvvyyyyjjppeviizeexxzxggwwjkkjxmmxxvvvkqqooagxxgeeaooppttnttnnnkjttxxwwggjunjjddoonusppsutttggtuhhqllrrqmuujjnwffwnxxpzzpyyllzzmoonweeffwkwppjjwnnxxkyyjjyyffuuicbbcccpuuoopoeeoosgwwsaasssjjgkkeennsppvvsmyymoosssoxxdyqqzzmmmmynndd';

function estMinuscule(mot){
    return minuscule(mot) === mot;
}

function tradWitcher(papierDeGeralt){
    let message ="";
    let i = 0;
    while (i < papierDeGeralt.length-1){
        let minuscule1 = estMinuscule(papierDeGeralt[i]);
        let majuscule2 = !estMinuscule(papierDeGeralt[i+1])
        if(minuscule1 && majuscule2 && papierDeGeralt[i] === minuscule(papierDeGeralt[i+1])){
            i += 2;
        
        }
        else{
            message += papierDeGeralt[i];
            i++;
        
        
        }
        
    }
    if( i == papierDeGeralt.length -1 ){
        message += papierDeGeralt[i];
    }

    return message;

}
  
let parchemin2 = tradWitcher(parchemin);

while ( parchemin !== parchemin2 ){
    parchemin = parchemin2;
    parchemin2 = tradWitcher(parchemin);
}
console.log(tradWitcher(parchemin));
console.log(tradWitcher('GwboOBynaABlnNecCigGdd'));
console.log(tradWitcher('MzZfiIFmMpPizwWZkbByYKfFjJkKusSbBUplLqisSlLdDIQPnrRnuUuUsgkKfFdDGSxhHmMmMXgGjaAJpzZpeEPPnNpncmMinNIwpPWfFcCCNPnqQxXNeqQhHraefFEdkKDpmMPARaqQqQikjJKmMoOIrRpPoOnNmyYMfFxXkoOsSKzZwefFEWvV yYyYjJpPEviIzeExXZxgGwWjkKJXmMxXVvVkqQoOagxXGeEAoOpPtTntTNnNKjtTxXwWgGJunjJdDoONUspPSutTtgGTUhHqlLrRQmuUjJnwfFWNxXpzZPyYlLzZMoOnweEfFWkwpPjJWnNxXKyYjJyYfFuUicbBCcCpuUoOPoeEoOsgwWsaAsSSjJGkKeEnNSpPvVsmyYMoOsSSOxXdyqQzZmMmMYnNDd'));



//Code Konami 

const codeKonami = {
'←←' : 'h',
'←↑' : '!',
'←→' : 'm',
'←↓' : 'l',
'←A' : 's',
'←B' : ',',
'↑←' : 'r',
'↑↑' : 'p',
'↑→' : 'x',
'↑↓' : 'b',
'↑A' : 'j',
'↑B' : 'v',
'→←' : 'a',
'→↑' : 'i',
'→→' : ' ', 
'→↓' : 'w',
'→A' : 'g',
'→B' : 'é',
'↓←' : 'è',
'↓↑' : 't',
'↓→' : '.',
'↓↓' : 'o',
'↓A' : 'n',
'↓B' : 'u',
'A←' : 'à',
'A↑' : '?',
'A→' : 'y',
'A↓' : 'c',
'AA' : 'f',
'AB' : 'd',
'B←' : 'q',
'B↑' : 'k',
'B→' : "'",
'B↓' : 'z',
'BA' : 'e',
'BB' : 'ê'
};


// const message = '↑↑↓↓←→←→BA';
const message = '←↓↓↓↑←←AB←↓BBA→→↓↑↓B→→→←↓B↑←→←←A→→↑B→←→↑↓AA↓↓B→→↑↓→↑→A→→A↓↓↓↑←BA←B→→→←AAAA↑←↓↓↓A↓↑→B→→←↓BA→→↑←BA→A→←↑←AB→→→↑←→↑↑→↑↓↑↓↓A→→←↑↓←↓BA→→ABBA←A→→←A↓↑→←↓↑↓BBA←A→→→→←→↓↓→←→↑→→BA↓↑→→←A↓B↑←↑B→BA↓↓B→→→←↓B→→↑↓→←←↓←↓BA↓↑→→ABBA←A→→←A↓↓↓BA↓↓↓↓B↑↑BA←A←B→→→←↑↑↑←↓←←A→→→←↑B↓↓→↑↑←→→↓↑BA↓A↓B→→↓↑BB↓↑BA→→→←↓B↑→→→→←←→→↑↑↓BA←A→→→→↓↑BA↓A↓↑→←A↓↓B←↓→←→↑↑←BA←A←B→→↓↑↓B→→BA↓A↓↑↑←BA↑←→←←A→→BA↓AAA→↑↓A→→AB→←↓A←A→→←↓→←→→↑↓→←←ABA→→ABBA←A→→↑↓→←A↓↓↑→B↑←→↑→←↓A←A→→↑↑BA↓B↑↑←↓→BBA→→ABBA→→↑←↓↓↑↓↓↓↓↑←A→→↑↓→↑↑↑↓←ABBA←A↓→→→↑↑↓B→↑←A←B→→↓↑↓B→→AB→BA↓↓↓↓B↑B↑←→↑↑←→←←A→→←↓BA→→A↓BA↑←↑BBA→←↓B←B→→B←↓BB→→↑←↓→→↓↑BA→→AA→←↓BAB↑←→←→→AB→B↓↑↑←↓B→↑↑←BA↓→→→BA↓↑→→↓ABA→→↓↑B→→←↑B→↑←ABA→→↑↑→←←A→→ABBA→→A↓↓↓←→←→BA↓AA↓BA↑←→→A←→→AB→BA↓←←→↑AAAA↑←BA↑←→→A↓BA→→←→BA←A←A→←→ABA→→A←→→←↓→←→→←→→←→↑↓A→→BA↓A→→↑↑→←↑←↓↑→←↓A↓↑→→ABBA→→←↓→←→→AA→↑↓A←B→→A↓→←↑←→→←→↓↓↓A→→↓↓↑↓↑ABAA↓↓↑→↑AA→→BA←A↓↑→→ABBA→→↓↑BA→→AB→BA↓↓↓↓B↑←→←→ABA↑←→→ABB→→←→A→↑↑←→→ABBA→→←↓→←→→←A↓↓↑←↓↑BA↓→';

const deuxParDeux = [];
for (let i = 0; i < message.length; i += 2) {
  deuxParDeux.push(message.slice(i, i + 2));
}
console.log(message);
console.log(deuxParDeux);
let messageTrad = '';

for (let deux of deuxParDeux) {
  messageTrad += codeKonami[deux];
}
console.log(messageTrad)


//Exo pydefi SW VII : Détection des stormtroopers compatissants

// let numero = i;
// dans une boucle qui demarre a 1503 a 2187 ?
// if (numero[1]) === numero[2] && numero[3] === numero[4]){}


//Les bonbons surprises
//Non... pas encore crotte de nez...


// les pref d'hermion : Aubergine, Épinards, Glace et Herbe
// if (bonbons[i] === 'Aubergine' || bonbons[i] === 'Epinards' || bonbons[i] === 'Glace' || bonbons[i] === 'Herbe') 

let compteurBonbon = 0;

bonbons =['Aubergine', 'Bouillabaisse', 'Epinards', 'Chaussettes', 'Glace', 'Foie', 'MorveDeTroll', 'OeufPourri', 'Herbe', 'Poubelle', 'Saucisse', 'Vomi'];


// while(bonbonsMelangee === true){

//     compteurBonbon++;
// }


function mixBonbon(bonbonTest) {
    for (let i = 0; i < bonbonTest.length; i += 5) {
      let bonbonTemporaire = bonbonTest[i];
      bonbonTest[i] = bonbonTest[i - 1];
      bonbonTest[i - 1] = bonbonTemporaire;
    }
    return bonbonTest;
  }

console.log(mixBonbon(bonbons));

// if (bonbons[i] === 'Aubergine' || bonbons[i] === 'Epinards' || bonbons[i] === 'Glace' || bonbons[i] === 'Herbe') 