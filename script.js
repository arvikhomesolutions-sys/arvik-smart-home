function toggleCatalogues() {
    const list = document.getElementById("catalogue-list");

    if (list.style.display === "block") {
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
}
