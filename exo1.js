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

let dieux = ["ARTEMIS ASCLEPIOS ATHENA ATLAS CHARON CHIRON CRONOS DEMETER EOS ERIS EROS GAIA HADES HECATE HEPHAISTOS HERA HERMES HESTIA HYGIE LETO MAIA METIS MNEMOSYNE NYX OCEANOS OURANOS PAN PERSEPHONE POSEIDON RHADAMANTHE SELENE THEMIS THETIS TRITON ZEUS"];

let dieuxYouss = ['ARTEMIS','ASCLEPIOS','ATHENA','ATLAS','CHARON','CHIRON','CRONOS','DEMETER','EOS','ERISEROS','GAIA','HADES','HECATE','HEPHAISTOS','HERA','HERMES','HESTIA','HYGIE','LETO','MAIA','METIS','MNEMOSYNE','NYX','OCEANOS','OURANOS','PAN','PERSEPHONE','POSEIDON','RHADAMANTHESELENE','THEMIS','THETIS','TRITON','ZEUS'];




