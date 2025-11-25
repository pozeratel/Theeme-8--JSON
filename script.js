const inputRef = document.getElementById("bookmarkInput");
const addButtonRef = document.getElementById("addBookmarkBtn");
const listRef = document.getElementById("bookmarkList");

function addItem() {
    if (inputRef.value.trim() === "") return;
    listRef.innerHTML += `<li> <a>${inputRef.value}</a> <button type = "button" class = "delete">Видалити</button></li>`;
    let itemsStorage = localStorage.setItem("myList", listRef.innerHTML);
    inputRef.value = ""
}

listRef.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
        localStorage.setItem("myList", listRef.innerHTML);
    }
});

let saved = localStorage.getItem("myList") || [];
if (saved) {
    listRef.innerHTML = saved;
}

addButtonRef.addEventListener("click", addItem);
window.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addItem();
    }
})



