document.addEventListener('DOMContentLoaded', function() {
    if (typeof marked === "function") {
        fetch("https://raw.githubusercontent.com/zwlucas/maple.rocks/main/README.md")
        .then(response => response.text())
        .then(text => {
            document.getElementById("content").innerHTML = marked(text);
            Prism.highlightAllUnder(document.getElementById("content"));
        }).catch(error => {
            console.error("Error fetching README.md", error);
        });
    }
});