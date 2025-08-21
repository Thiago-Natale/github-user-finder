import { baseUrl, reposQuantity } from "../variables.js";

async function getRepositories(username) {
  const response = await fetch(
    `${baseUrl}${username}/repos?per_page=${reposQuantity}`
  );
  return await response.json();
}

export {getRepositories}