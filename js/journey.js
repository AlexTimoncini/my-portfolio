setTimeout(()=>{
    document.getElementById('loader').classList.add('hidden');
    init()    
},500)
function init() {
    setTimeout(()=>{
        fadeIn();
    },550)
    let path = document.querySelector("#paperBoat #waves"),
        pathLength = path.getTotalLength();    
    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    path.style.strokeDashoffset = pathLength;
    setTimeout(() => { 
        function animate() {
            pathLength -= 40+(pathLength / path.getTotalLength());
            if (pathLength < 0) pathLength = 0;
            path.style.strokeDashoffset = pathLength;
    
            if (pathLength > 0) {
                requestAnimationFrame(animate);
            } else {
                document.getElementById("diveIn").classList.add("active");
                enableScroll();
            }
        }           
        requestAnimationFrame(animate);
    }, 100);
    let paths = document.querySelectorAll("path.boat")
    paths.forEach((path)=>{
        let pathLength = path.getTotalLength();    
        path.style.strokeDasharray = `${pathLength} ${pathLength}`;
        path.style.strokeDashoffset = pathLength;
        setTimeout(() => {
            function animateBoat() {
                pathLength -= 7+(pathLength / path.getTotalLength());
                if (pathLength < 0) pathLength = 0;
                path.style.strokeDashoffset = pathLength;
        
                if (pathLength > 0) {
                    requestAnimationFrame(animateBoat);
                }
            }        
            requestAnimationFrame(animateBoat);
        }, 100);    
    })
    if(parseInt(localStorage.getItem("interval")) > 0){
        clearInterval(localStorage.getItem("interval"))
        localStorage.setItem("interval", 0)
    }
}