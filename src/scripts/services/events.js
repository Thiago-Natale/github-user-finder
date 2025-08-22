import { baseUrl } from "../variables.js";

async function getEvents(username) {
  const response = await fetch(`${baseUrl}${username}/events?per_page=10`);
  return await response.json();
}

export { getEvents };
