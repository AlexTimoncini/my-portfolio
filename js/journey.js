setTimeout(()=>{
    document.getElementById('loader').classList.add('hidden');
    init()    
},500)
let first = true
function init() {
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
    let dimensions = document.getElementById("path").getBoundingClientRect()
    document.getElementById("path_line").setAttribute("height", dimensions.height)
    document.getElementById("path_line").setAttribute("width", dimensions.width)
    const linea = document.querySelector("#path_line path");
    const lunghezza = dimensions.height // Ottiene la lunghezza della linea
    const container = document.querySelector('#path');
    linea.style.strokeDasharray = `${lunghezza} ${lunghezza}`;
    let apperead = false,   
        start = 0
    function aggiornaLinea() {
        const viewportHeight = window.innerHeight
        const rect = container.getBoundingClientRect()
        const inizioAnimazione = viewportHeight * 0.5
        const fineAnimazione = viewportHeight * 0.5
        const progress = (viewportHeight - rect.top - inizioAnimazione) / (rect.height + fineAnimazione)
        const progressClamped = Math.min(1, Math.max(0, progress / 2.2))
        linea.style.strokeDashoffset = lunghezza * (1 - progressClamped)
        const cursor_boat = document.getElementById('cursor_boat')
        const directions = document.getElementById("path_line").getBoundingClientRect()
        if(progressClamped > 0){
            cursor_boat.style.opacity = "1"
            if(!apperead){
                apperead = true
                start = directions.top
            }
            if(apperead){
                cursor_boat.style.top = start * (1 - progressClamped)+"px"
            }
            if(progress >= 0.82){
                cursor_boat.style.display = "none"
            } else {
                cursor_boat.style.display = "block"
            }
        } else {
            cursor_boat.style.opacity = "0"
        }
    }

    window.addEventListener('scroll', ()=>{
        aggiornaLinea()
        if(first){
            setTimeout(()=>{
                fadeIn();
            },550)
        }
    });
    window.addEventListener('resize', ()=>{
        top.location.reload()
    });
    aggiornaLinea();
}