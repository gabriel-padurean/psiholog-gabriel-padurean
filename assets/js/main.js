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
const boxes = document.querySelectorAll(".box");
function updateOpacity()
{
    const windowHeight = window.innerHeight;
    const halfWindow = windowHeight / 2;
    boxes.forEach
    (
        box =>
        {
            const rect = box.getBoundingClientRect();
            const visiblePart = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
            const visible = Math.min(Math.max(visiblePart / halfWindow, 0), 1);
            let opacity;
            if (rect.bottom <= 0 || rect.top >= windowHeight)
            {opacity = 0;}
            else if (visible < 0.2)
            {
                opacity = (visible / 0.2) * 0.4;
            }
            else
            {
                opacity = 0.4 + ((visible - 0.2) / 0.8) * (1 - 0.4);
            }
            box.style.opacity = opacity;
        }
    );
}
window.addEventListener("scroll", updateOpacity);
window.addEventListener("resize", updateOpacity);
updateOpacity();