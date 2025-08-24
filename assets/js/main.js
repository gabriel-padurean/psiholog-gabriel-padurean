// Date
document.getElementById("year [0]").textContent = new Date().getFullYear();   

// On before unload
window.onbeforeunload = function ()
{
    window.scrollTo(0, 0);
}

// Switch sections
let current = 0;
function showDiv(i)
{
    document.querySelectorAll(".content").forEach
    (
        d => d.classList.remove("active")
    );
    document.querySelectorAll(".content")[i].classList.add("active");
}
document.getElementById("button [3]").addEventListener
(
    "click", () => 
    {
        current = (current + 1) % document.querySelectorAll(".content").length;
        showDiv(current);
    }
);
document.getElementById("button [2]").addEventListener
(
    "click", () =>
    {
        current = (current - 1 + document.querySelectorAll(".content").length) % document.querySelectorAll(".content").length;
        showDiv(current);
    }
);
// Fade in/out

// Overlay 1
const overlays1 = document.querySelectorAll(".overlay1");
const observer1 = new IntersectionObserver
(
    (entries) =>
    {
        entries.forEach
        (
            entry =>
            {
                const el = entry.target;
                const isMostlyVisible = entry.intersectionRatio > 0.6;
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
        threshold: [0, 0.6, 1]
    }
);
overlays1.forEach
(
    target =>
    {
        target.style.opacity = 0.4;
        observer1.observe(target);
    }
);

// Overlay 2
const overlays2 = document.querySelectorAll(".overlay2");
const observer2 = new IntersectionObserver
(
    (entries) =>
    {
        entries.forEach
        (
            entry =>
            {
                const el = entry.target;
                const isMostlyVisible = entry.intersectionRatio > 0.27;
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
        threshold: [0, 0.27, 1]
    }
);
overlays2.forEach
(
    target =>
    {
        target.style.opacity = 0.27;
        observer2.observe(target);
    }
);
