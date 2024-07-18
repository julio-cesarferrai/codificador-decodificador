function pegaDados()
{
    let caixa = document.getElementById("texto");
    let texto = caixa.value;
    return texto;
}

function escreve(a)
{
    let resposta= document.getElementById("resposta");
    //resposta.innerText= ""
    resposta.innerText= a ;
    let copia= document.getElementById("btcopia");
    copia.style.display = "inline";
}
function codificar()
{
    let texto= pegaDados();
    let processado="";
    let i;
    for (i=0; i< texto.length;i++)
    {
        let letra=texto[i];
        switch(letra)
        {
            case 'a':
                processado += "ai";
                break;
            case 'e':
                processado += "enter";
                break;
            case 'i':
                processado += "imes";
                break;
            case 'o':
                processado += "ober";
                break;
            case 'u':
                processado += "ufat";
                break;
            default:
                processado += letra;
        }
    }
    escreve(processado);
}

function decodificar() {
    let texto = pegaDados();
    let processado = "";
    let cc = 0;

    while (cc < texto.length) {
        let letra = texto[cc];

        switch (letra) {
            case 'a':
                if (texto.slice(cc, cc + 2) === "ai") {
                    processado += "a";
                    cc += 2;
                } else {
                    processado += letra;
                    cc++;
                }
                break;
            case 'e':
                if (texto.slice(cc, cc + 5) === "enter") {
                    processado += "e";
                    cc += 5;
                } else {
                    processado += letra;
                    cc++;
                }
                break;
            case 'i':
                if (texto.slice(cc, cc + 4) === "imes") {
                    processado += "i";
                    cc += 4;
                } else {
                    processado += letra;
                    cc++;
                }
                break;
            case 'o':
                if (texto.slice(cc, cc + 4) === "ober") {
                    processado += "o";
                    cc += 4;
                } else {
                    processado += letra;
                    cc++;
                }
                break;
            case 'u':
                if (texto.slice(cc, cc + 4) === "ufat") {
                    processado += "u";
                    cc += 4;
                } else {
                    processado += letra;
                    cc++;
                }
                break;
            default:
                processado += letra;
                cc++;
                break;
        }
    }

    escreve(processado);
}

function copia()
{
    let dados = document.getElementById("resposta");
    navigator.clipboard.writeText(dados.textContent);
}