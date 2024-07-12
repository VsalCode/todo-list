const todoName = document.getElementById("todoName");
const btnTodo = document.getElementById("btnTodo");

btnTodo.addEventListener("click", function () {
  if (todoName.value === "") {
    alert("Nama Todo tidak boleh kosong!");
  } else {
    let ul = document.getElementsByClassName("list-group")[0];
    let li = document.createElement("li");
    li.className = "list-group-item m-2 d-flex justify-content-between";
    li.innerHTML = `
      <div>
        <input class="form-check-input me-1" type="checkbox" value="">
        <span>${todoName.value}</span>
      </div>
      <button class="badge  bg-danger btn-hapus">X</button>
    `;
    ul.appendChild(li);
    todoName.value = "";

    let input = li.querySelector(".form-check-input");
    input.addEventListener("change", function () {
      let todoSpan = input.nextElementSibling;
      todoSpan.classList.toggle("text-decoration-line-through");
    });

    let close = li.querySelector(".btn-hapus");
    close.addEventListener("click", function () {
      ul.removeChild(li);
    });
  }
});
