const articlePreviewComponent = document.querySelector(".article-preview");
const shareButton = document.querySelector(".share-button");

document.body.addEventListener("click", handleClick);

function handleClick(event) {
    if (event.target === shareButton) {
        articlePreviewComponent.classList.toggle("share-active");
        return;
    }
    articlePreviewComponent.classList.remove("share-active");
}
