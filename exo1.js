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




function testBoeuf( ){
    for (let blanc = 0  ; blanc < 1000 ; blanc++){
        for (let roux = blanc + 1  ; roux < 1000 ; roux++){
            for (let noir = roux + 1  ; noir < blanc*2 ; noir++){
                if ((blanc * roux  * noir) === ((blanc + roux + noir)*777 ) && blanc+roux+noir < 1000 ){
                    console.log([blanc , roux , noir]);
                }
            }
        }
    }
}





// Exo 5 de pydefi


let etagesPommes;

function pommesAEmporter(etage){
    let pommes = 0;
    for(let i = 0; i <= etage ; i ++){
        etagesPommes = i**2;
        if(etagesPommes %3 === 0){
            pommes = etagesPommes + pommes ;
            
            
        }
        
    }
    return pommes;
}

console.log(pommesAEmporter(50))