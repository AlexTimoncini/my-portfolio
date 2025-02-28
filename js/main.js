//parallax
const hasMouse = navigator.maxTouchPoints === 0;
if (hasMouse) {
    document.addEventListener("mousemove", parallax);
} else {
    console.log("Parallax disabled: No mouse detected");
}
function parallax(event) {
    this.querySelectorAll(".parallax").forEach((shift) => {
        const position = shift.dataset.parallax
        const x = (window.innerWidth - event.pageX * position) / 90
        const y = (window.innerHeight - event.pageY * position) / 90
        shift.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}