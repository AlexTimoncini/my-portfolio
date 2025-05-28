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
    let dimensions = document.getElementById("path").getBoundingClientRect()
    document.getElementById("path_line").setAttribute("height", dimensions.height)
    document.getElementById("path_line").setAttribute("width", dimensions.width)
    const linea = document.querySelector("#path_line path");
    const lunghezza = dimensions.height // Ottiene la lunghezza della linea
    const container = document.querySelector('#path');
    linea.style.strokeDasharray = `${lunghezza} ${lunghezza}`;
    function aggiornaLinea() {
        const rect = container.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const inizioAnimazione = viewportHeight * 0.5; // Inizia quando è al 30% dello schermo
        const fineAnimazione = viewportHeight * 0.5; // Finisce quando è al 70% dello schermo
        const progress = (viewportHeight - rect.top - inizioAnimazione) / (rect.height + fineAnimazione);
        const progressClamped = Math.min(1, Math.max(0, progress / 2.2));
        linea.style.strokeDashoffset = lunghezza * (1 - progressClamped);
    }

    window.addEventListener('scroll', aggiornaLinea);
    window.addEventListener('resize', ()=>{
        top.location.reload()
    });
    aggiornaLinea();
}