init()
function init() {
    let activeText = 0,
        titles = [
            "Alex<br>Timoncini",
            "I'm a Web<br>Developer"
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
    //parallax
    const hasMouse = navigator.maxTouchPoints === 0;

    if (hasMouse) {
    document.addEventListener("mousemove", parallax);
    } else {
    console.log("Parallax disabled: No mouse detected");
    }
}
function parallax(event) {
    this.querySelectorAll(".parallax").forEach((shift) => {
      const position = shift.dataset.parallax
      const x = (window.innerWidth - event.pageX * position) / 90
      const y = (window.innerHeight - event.pageY * position) / 90
      shift.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}