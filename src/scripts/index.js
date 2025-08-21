import { getUser } from "/github-user-finder/src/scripts/services/user.js";
import { getRepositories } from "/github-user-finder/src/scripts/services/repositories.js";
import { user } from "/github-user-finder/src/scripts/objects/object_user.js";
import { screen } from "/github-user-finder/src/scripts/objects/object_screen.js";

const btnSearch = document.getElementById("btn-search");
const inputSearch = document.getElementById("input-search");

btnSearch.addEventListener("click", () => {
  const usuarioDigitado = inputSearch.value;
  if (validateEmptyInput(usuarioDigitado)) return;
  getUserData(usuarioDigitado);
});

inputSearch.addEventListener("keyup", (e) => {
  const usuarioDigitado = e.target.value;
  const key = e.which || e.keyCode;
  const isEnterKey = key === 13;

  if (isEnterKey) {
    if (validateEmptyInput(usuarioDigitado)) return;
    getUserData(usuarioDigitado);
  }
});

function validateEmptyInput(username) {
  if (username.length === 0) {
    alert("Favor digitar um usuário");
    return true;
  }
}

async function getUserData(username) {
  const userResponse = await getUser(username);

  console.log(userResponse);
  if (userResponse.message === "Not Found") {
    screen.renderNotFound();
    return
  }

  const reposResponse = await getRepositories(username);

  user.setInfo(userResponse);
  user.setRepositories(reposResponse);

  screen.renderUser(user);
}

function getUserRepos(username) {
  getRepositories(username).then((reposData) => {
    let reposItens = "";

    reposData.forEach((repo) => {
      reposItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`;
    });

    document.querySelector(
      ".profile-data"
    ).innerHTML += `<div class="repositories section">
                      <h2>
                      Repositories
                      </h2>                                                          
                      <ul>
                      ${reposItens}
                      </ul>
                    </div>`;
  });
}
