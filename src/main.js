const content = document.querySelector(".content");
const inputSearch = document.querySelector("input[type='search']");
const btnLimpar = document.querySelector("#refresh");

let items = [];

inputSearch.oninput = () => {
  content.innerHTML = "";
  items

    .filter((item) =>
      item.toLowerCase().includes(inputSearch.value.toLowerCase())
    )
    .forEach((item) => printInfoApi(item));
};

function printInfoApi(item) {
  const div = document.createElement("div");
  div.innerHTML = item;
  content.append(div);
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((users) => {

    users.forEach((user) => {
        printInfoApi(user.name);
        printInfoApi(user.username);
        printInfoApi(user.email);
        printInfoApi(user.phone);
        printInfoApi(user.website);
        printInfoApi(user.company.name);
        printInfoApi(user.company.catchPhrase);

        items.push(user.name);
        items.push(user.username);
        items.push(user.email);
        items.push(user.phone);
        items.push(user.website);

    });
    
});

btnLimpar.addEventListener('click', () => {
    window.location.reload();
});