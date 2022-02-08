/*
    Polecenie - dodaj walidacje do formularza.
    W przypadku błędu, wyświetlić go w alercie lub w jakimś miejscu na stronie.
    Walidacje:
    - Tytuł i treść nie mogą być puste
    - Tytuł musi mieć przynajmniej 5 znaków, maksymalnie 30
    - Treść musi mieć przynajmniej 10 znaków, maksymalnie 200
*/

const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const addButton = document.getElementById("add-button");
const postContainer = document.getElementById("posts");
const form = document.getElementById("form");
const showFormBtn = document.getElementById("show-form");

let lastId = 1;

let posts = [
    {
        id: 1,
        title: "Tytuł posta",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perferendis doloribus modi obcaecati tempora, officiis eos atque. Laborum perspiciatis provident laboriosam mollitia dolorum vitae itaque, officiis necessitatibus nostrum qui. Suscipit. Expedita, assumenda. Sint hic voluptatibus reiciendis nostrum nesciunt id, voluptas pariatur deserunt sed necessitatibus itaque quod iusto vero, accusamus illo minus veritatis dolor consequuntur qui expedita, tenetur magni ex? Provident!",
        date: new Date().toLocaleString("pl"),
    },
];

function renderPosts() {
    postContainer.innerHTML = "";

    for(const post of posts) {
        if(post != posts[0]) {
            postContainer.innerHTML += "<hr>";
        }

        postContainer.innerHTML += `
            <div class="post">
                <div class="title">${post.title}</div>
                <div class="date">
                    ${post.date}
                    <a href="#" style="vertical-align: middle" data-id="${post.id}" onclick="deletePost(this)">
                        <img height="16" src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Flat_cross_icon.svg" alt="">
                    </a>
                </div>
                <div class="post-content">${post.content}</div>
            </div>
        `;
    }
}

renderPosts();

addButton.onclick = () => {
    const title = titleInput.value;
    const content = contentInput.value;

    posts.push({
        id: ++lastId,
        title: title,
        content: content,
        date: new Date().toLocaleString("pl"),
    });

    renderPosts();

    titleInput.value = "";
    contentInput.value = "";

    hideForm();
};

function deletePost(link) {
    const id = link.getAttribute("data-id");
    posts = posts.filter(post => post.id != id);
    renderPosts();
}

showFormBtn.onclick = () => {
    if(form.classList.contains("hidden")) {
        showFormBtn.innerHTML = "Ukryj formularz";
        form.classList.remove("hidden");
    }
    else {
        hideForm();
    }
};

function hideForm() {
    form.classList.add("hidden");
    showFormBtn.innerHTML = "Dodaj post";
}
