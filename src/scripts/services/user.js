import { baseUrl } from "/github-user-finder/src/scripts/variables.js";

async function getUser(username) {
  const response = await fetch(`${baseUrl}${username}`);
  return await response.json();
}

export {getUser}