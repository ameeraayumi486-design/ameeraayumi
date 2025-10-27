// Tooltip function
function showTooltip(role) {
    const tooltip = document.getElementById("tooltip");
    tooltip.innerText = "You clicked: " + role;
    tooltip.style.display = "block";




    // Hide tooltip after 2 seconds
    setTimeout(() => {
        tooltip.style.display = "none";
    }, 2000);
}
