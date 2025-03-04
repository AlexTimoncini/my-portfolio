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
        })
    */
    let path = document.querySelector("#paperBoat path"),
        pathLength = path.getTotalLength()
    path.style.strokeDasharray = pathLength+" "+pathLength
    path.style.strokeDashoffset = pathLength
    setTimeout(async function(){
        for(let i=pathLength;i>0;i--){
            i -= 50 * (i/pathLength)
            path.style.strokeDashoffset = i
            await sleep(0)
        }
        document.getElementById("diveIn").classList.add("active")
        enableScroll()
    },1000)

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}  