const content = document.querySelector(".content");
const inputSearch = document.querySelector("input[type='search']");
const btnLimpar = document.querySelector("#refresh");

let items = [];

//campo de busca em todas as propriedades da array
inputSearch.oninput = () => {
  content.innerHTML = "";
  items
    .filter((user) =>
      Object.values(user).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(inputSearch.value.toLowerCase())
      )
    )
    .forEach((user) => printInfoApi(user));
};

//printa na tela
function printInfoApi(user) {
  const userDiv = document.createElement("div");
  userDiv.classList.add("user");
  userDiv.innerHTML = `
      <div class="card">
        <br><strong>Name:</strong>${user.name}
        <br><strong>Username:</strong> ${user.username}
        <br><strong>Email:</strong> ${user.email}
        <br><strong>Contato:</strong> ${user.phone}
        <br><strong>Website:</strong> ${user.website}
        <br><strong>Razão social:</strong> ${user.company.name}
        <br><strong>Slogan da empresa:</strong> ${user.company.catchPhrase}
        <br><strong>Valores:</strong> ${user.company.bs}
        <br><strong>Street:</strong> ${user.address.street},${user.address.suite}, ${user.address.city}
        <br><strong>CEP:</strong> ${user.address.zipcode}
        <br><strong>Geolocalização:</strong> Latitude = ${user.address.geo.lat} Longitude = ${user.address.geo.lng} 
        
        <br>
      </div>
  `;
  content.append(userDiv);
}

//Fetch na API
fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((users) => {
    users.forEach((user) => {
      items.push(user);  // Adiciona o objeto de usuário completo à lista items
      printInfoApi(user); // Passa o objeto user completo
    });
  });

btnLimpar.addEventListener("click", () => {
  window.location.reload();
});
