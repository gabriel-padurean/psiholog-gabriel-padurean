// Date
document.getElementById("year [0]").textContent = new Date().getFullYear();   

// On before unload
window.onbeforeunload = function ()
{
    window.scrollTo(0, 0);
}

// Fade in/out

// Overlay
const overlays = document.querySelectorAll(".overlay");
const observer = new IntersectionObserver
(
    (entries) =>
    {
        entries.forEach
        (
            entry =>
            {
                const el = entry.target;
                const isMostlyVisible = entry.intersectionRatio > 0.4;
                const newOpacity = isMostlyVisible ? 1 : 0.4;
                if
                (
                    parseFloat(el.style.opacity) !== newOpacity
                )
                {
                    requestAnimationFrame
                    (
                        () => {el.style.opacity = newOpacity}
                    );
                }
            }
        );
    },
    {
        threshold: [0, 0.4, 1]
    }
);
overlays.forEach
(
    target =>
    {
        target.style.opacity = 0.4;
        observer.observe(target);
    }

);
