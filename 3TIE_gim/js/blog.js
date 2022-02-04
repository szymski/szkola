const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const addButton = document.getElementById("add-button");
const posts = document.getElementById("posts");
const form = document.getElementById("form");
const showFormBtn = document.getElementById("show-form");

addButton.onclick = () => {
    const title = titleInput.value;
    const content = contentInput.value;

    posts.innerHTML += `
        <hr>
        <div class="post">
            <div class="title">${title}</div>
            <div class="date">${new Date().toLocaleString("pl")}</div>
            <div class="post-content">${content}</div>
        </div>
    `;
};

showFormBtn.onclick = () => {
    if(form.style.display == "none") {
        showFormBtn.innerHTML = "Ukryj formularz";
        form.setAttribute("style", "display: block");
    }
    else {
        showFormBtn.innerHTML = "Dodaj post";
        form.setAttribute("style", "display: none");
    }
};