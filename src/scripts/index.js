import { getUser } from "./services/user.js";
import { getRepositories } from "./services/repositories.js";
import { user } from "./objects/object_user.js";
import { screen } from "./objects/object_screen.js";
import { getEvents } from "./services/events.js";

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

  if (userResponse.message === "Not Found") {
    screen.renderNotFound();
    return;
  }

  const reposResponse = await getRepositories(username);

  const eventsResponse = await getEvents(username);

  user.setInfo(userResponse);
  user.setRepositories(reposResponse);
  user.setEvents(eventsResponse);

  console.log(user);

  screen.renderUser(user);
}
