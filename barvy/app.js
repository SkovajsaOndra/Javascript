//proměnné
const colors = ["green","red","rgba(133,122,200)","#f1025"];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");
//funkce tlačítka(onclick)
btn.addEventListener("click",function() {
    console.log("Jsem ve funkci");
    let cisloBarvy = VratNahodneCislo ();
    //náhodná funkce
    document.body.style.backgroundColor = colors[cisloBarvy];
    color.textContent = colors[cisloBarvy];
    });

//funkce pro náhodné vrácení od 0 do 3
function VratNahodneCislo()
{
    return Math.floor(Math.random() * colors.lenght);
}


