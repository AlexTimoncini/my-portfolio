setTimeout(()=>{
    document.getElementById('loader').classList.add('hidden');
    init()    
},500)
async function init() {
    setTimeout(()=>{
        fadeIn();
    },550)
    /*
        let path = document.querySelector("path"),
        pathLength = path.getTotalLength()

        path.style.strokeDasharray = pathLength+" "+pathLength
        path.style.strokeDashoffset = pathLength

        window.addEventListener("scroll", ()=>{
        let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
            let drawLength = pathLength * scrollPercentage;
            path.style.strokeDashoffset = pathLength - drawLength;
        }))*/

    let path = document.querySelector("#paperBoat path"),
        pathLength = path.getTotalLength();    
    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    path.style.strokeDashoffset = pathLength;

    setTimeout(() => {
        function animate() {
            pathLength -= 25+(pathLength / path.getTotalLength());
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

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}  