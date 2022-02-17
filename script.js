const passwordOutput = document.getElementById('password-output'); //on récupère l'id du input ou le mdp va s'afficher
const dataLowercase = "azertyuiopqsdfghjklmwxcvbn".split(''); //ttes les lettres minuscules, on split pour les récupérer chacune indépendamment 
const dataUppercase = "AZERTYUIOPQSDFGHJKLMWXCVBN".split(''); // idem pour ttes les lettres majuscules
const dataNumbers = "0123456789".split(''); //idem pour ts les chiffres
const dataSymbols = "!,?:/*-+.;$~#{'([-|`_^@])=}%µ£¤<>".split(''); //idem pour les symbols

//pas nécessaire de récupérer l'id des checkbox dans une variable car ce sont des identifiants connus de javascript
//cela fonctionne pour les checkbox et les button

function generatePassword() { //fonction pr générer le mdp
    const data = [].concat( //on concatene les ternaires suivantes
        lowercase.checked ? dataLowercase : [], //si lowercase est check, renvoie dataLowercase, sinon renvoie un tableau vide
        uppercase.checked ? dataUppercase : [], //si uppercase est check, renvoie dataUppercase, sinon renvoie un tableau vide
        numbers.checked ? dataNumbers : [], //si numbers est check, renvoie dataNumbers, sinon renvoie un tableau vide
        symbols.checked ? dataSymbols : [] //si symbols est check, renvoie dataSymbols, sinon renvoie un tableau vide
    );

    let passwordLength = parseInt(document.getElementById('display-password-length').value); //renvoie la longueur du mdp souhaité en passant en valeur numérique (parseInt) la valeur de l'id "display-password-length" 

    let newPassword = ''; //nouveau mdp vide

    if (data.length === 0) { //si aucun des critères n'est check, on renvoie une alert
        passwordOutput.innerHTML = "Générateur de MDP";
        alert("Veuillez sélectionner des critères");
        return;
    }

    for (let i = 0; i < passwordLength; i++) { //pour chaque caractère du mdp, tant que la longuer souhaitée n'est pas atteinte
        newPassword += data[Math.floor(Math.random() * data.length)] //pour newPassword, on ajoute a chaque passage data correspondant à math.floor(arrondi a l'inferieur) de math.random(chiffre aléatoire entre 0 et 1) * longueur data
    }                       //              0.74     *   87 (longueur max) = 64,38   math.floor arrondi a l'inférieur donc 64, ce qui va correspondre à un caractère, et ainsi de suite jusqu'à atteindre la longeur souhaitée du mdp
    passwordOutput.value = newPassword; //on affiche le mot de passe généré à la place du texte "Générateur de MDP"

    passwordOutput.select(); //on sélectionne le passwordOutput
    document.execCommand('copy'); //méthode qui permet de faire un copié de la selection
    generateButton.innerHTML = "copié !" //création d'un bouton "copié"
    setTimeout(() => {generateButton.innerHTML = "Générer mot de passe"}, 3500); //au bout de 3500 ms, le bouton redevient "Générer mot de passe"
}