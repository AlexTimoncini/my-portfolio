init()
function init() {
    let activeText = 0,
        titles = [
            "Alex<br>Timoncini",
            "I'm a Web<br>Developer"
        ]
    if(parseInt(localStorage.getItem("interval")) > 0){
        clearInterval(localStorage.getItem("interval"))
        localStorage.setItem("interval", 0)
    }
    let interval = setInterval(function(){
        if(activeText){
            activeText = 0
        } else {
            activeText = 1
        }
        document.getElementById("multi_title").classList.add("fade-in")
        setTimeout(()=>{
            document.getElementById("multi_title").innerHTML = titles[activeText]
        }, 250)
        setTimeout(()=>{
            document.getElementById("multi_title").classList.remove("fade-in") 
        }, 500)
    },5000)
    setTimeout(()=>{
        fadeIn();
    },550)
    localStorage.setItem("interval", interval)
}