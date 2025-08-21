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
updateOpacity();
