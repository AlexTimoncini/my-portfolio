init()
function init() {
    setTimeout(()=>{
        fadeIn();
        levelAnimate();
    },550)
    window.addEventListener('scroll', levelAnimate );
    function levelAnimate() {
        let elementsArray = document.querySelectorAll(".level");
        for (let i = 0; i < elementsArray.length; i++) {
            let elem = elementsArray[i]
            let distInView = elem.getBoundingClientRect().top - window.innerHeight + 40;
            if (distInView < 0) {
                elem.querySelector(".dot").classList.add("animateDot");
                elem.querySelector("circle:nth-child(2)").classList.add("showIn");
            } else {
                elem.querySelector(".dot").classList.remove("animateDot");
                elem.querySelector("circle:nth-child(2)").classList.remove("showIn");
            }
        }
    }
}