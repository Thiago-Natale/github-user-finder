import { baseUrl, maxItens} from "../variables.js";

async function getEvents(username) {
  const response = await fetch(`${baseUrl}${username}/events?per_page=${maxItens}`);
  return await response.json();
}

export { getEvents };
