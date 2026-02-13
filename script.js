function selectMood(mood) {
    document.getElementById("selectedText").innerText =
        "You selected: " + mood;

    // Remove active class
    document.querySelectorAll(".mood-card").forEach(card => {
        card.classList.remove("active");
    });
}

function clearSelection() {
    document.getElementById("selectedText").innerText =
        "You selected: None";
}
