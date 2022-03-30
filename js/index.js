const image = document.getElementsByTagName('img')[0];
const textCarta = document.getElementById('text-carta');

const arrayText = [
    "Mi amorcito hermosa❤️ <br><br>Primero que nada, muy buenos días y espero que hayas descansado muchísimo mi amor🥰<br><br> Ahora mi amor, te felicito por estos 20 años de vida que cumples hoy,20 años llenos de experiencias, aprendizajes, felicidad y muchas cosas más...Sé que es el primer cumpleaños que paso contigo, pero si de algo estoy seguro, es de que quiero estar en todos los demás que vengan❤️",
    "Tambén aprovecho para desearte un hermoso día, que sea tan hermoso como tus ojos y tu ser, que te la pases muy bien con las personas que te rodean y que tanto te amamos❤️ <br><br> Quiero que siempre lleves presente que te amo, que eres lo mejor que me pudo haber pasado en toda la vida y por eso siempre voy a cuidar de ti y darte todo💘",
    "Además de cumplir 20 años de vida, cumples 20 años siendo la mujer más preciosa, hermosa y perfecta de todo el universo...❤️<br><br>Me encantas y te amo con toda mi alma mi Cristy, en serio me gustas mucho🥰<br><br>Muchísimas felicidades mi amor, que cumplas muchos años más y que el resto de tu vida abunde la felicidad, el amor y la salud en ti🥺❤️",
    "Ahora quiero mostrarte unas fotos que conseguí de una pequeña que se ha convertido en una gran mujer y la más hermosa🥰",
    "Aquí una bebé muy preciosa y tierna la verdad🥺❤️",
    "Una Cristy un poco más grande, que iba aprendiendo más cosas de lo que es la vida❤️",
    "Si pudiera regresar el tiempo, iría ahí a que me enseñes a bailar🥰",
    "Definitivamente desde pequeña tienes los ojos más bonitos del mundo, me encantan💘",
    "Mi niña con un disfraz...Te amo tanto🥺❤️",
    "Ahora el resto de tu vida quiero verte crecer como persona y vernos crecer como pareja mi amor❤️",
    "Para mi siempre vas a ser mi niña preciosa, sabías?🥰",
    "Espero que ver todas estas fotos te hayan traído algún sentimiento o recuerdo bonito mi amor, porque a mi si...❤️",
    "Ahora, quiero invitar a esta niña tan guapa a desayunar a un lugar que me ha dicho le gustaría ir...Aceptas?🥺❤️"
];

let index = -2;
let lim1 = -2;
let lim2 = 10;

function changeIndex(value) {
    if(value==1){
        index ++;
        if(index>lim2){
            index = 10;
        }
    }
    if(value==-1){
        index --;
        if(index<lim1){
            index = -2;
        }
    }
    
    if(index<1){
        image.classList.add("hidden");
        image.classList.remove("image");
    }
    if(index>=1){
        
        image.classList.remove("hidden");
        image.classList.add("image");
        let src = "css/images/img"+index+'.jpg';
        image.src=src;
    }
    textCarta.innerHTML = arrayText[index+2];

}