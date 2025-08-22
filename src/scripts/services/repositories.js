import { baseUrl, maxItens } from "../variables.js";

async function getRepositories(username) {
  const response = await fetch(
    `${baseUrl}${username}/repos?per_page=${maxItens}`
  );
  return await response.json();
}

export {getRepositories}