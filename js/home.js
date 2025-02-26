init()
function init() {
    let activeText = 0,
        titles = [
            "Alex<br>Timoncini",
            "I'm a<br>Web Developer"
        ]
    setInterval(()=>{
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
    },6000)
}
