const randomColor = function() {
    const hex = "0123456789ABCDEF"
    let color ="#"
    for( let i =0 ; i <6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}


const start = document.getElementById("start");
const stop = document.getElementById("stop");

let intevalId;

start.addEventListener("click", () => {
   const body = () =>{
    document.querySelector("body").style.backgroundColor = randomColor()
  }
  intervalId = setInterval(body , 1000)
});

stop.addEventListener('Onclick' , () =>{
    clearInterval(intervalId);
    intevalId = null   // this stop to overwriting on intervalID
})