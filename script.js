document.addEventListener("DOMContentLoaded", function () {
    if (typeof marked === "function") {
        fetch('https://raw.githubusercontent.com/zwlucas/maple.rocks/main/README.md')
        .then(response => response.text())
        .then(text => {
            const readmeHtml = marked(text);
            const container = document.getElementById('content');
            container.innerHTML = readmeHtml;
            Prism.highlightAllUnder(container);
        })
        .catch(error => console.error("Oops:", error));
    }
});
