const content = document.querySelector(".content");
const inputSearch = document.querySelector("input[type='search']");

let items = [];

inputSearch.oninput = () => {
  content.innerHTML = "";

  items
    .filter((item) =>
      item.toLowerCase().includes(inputSearch.value.toLowerCase())
    )
    .forEach((item) => addHTML(item));
};

function addHTML(item) {
  const div = document.createElement("div");
  div.innerHTML = item;
  content.append(div);
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((users) => {
    users.forEach((user) => {
        
      addHTML(user.name);
      addHTML(user.username);
      addHTML(user.email);
      addHTML(user.phone);
      addHTML(user.website);
      addHTML(user.company.name);
      addHTML(user.company.catchPhrase);

      items.push(user.name);
      items.push(user.username);
      items.push(user.email);
      items.push(user.phone);
      items.push(user.website);
      console.log(items);
    });
    
});