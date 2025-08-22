const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `<div class="info">
                     <img src="${user.avatar_url}" />
                     <div class="data">
                         <h2>${user.name ?? "Não possui nome registrado"}</h2>
                         <div class="social">
                            <p>👥Seguidores: ${user.followers}</p>
                            <p>👤Seguindo: ${user.following}</p>
                         </div>
                         <p>${user.bio ?? "Não possui bio registrada"}</p>
                     </div>
                     </div>`;
    let repositoriesItens = "";
    user.repositories.forEach((repo) => {
      repositoriesItens += `<li>
                              <a href="${repo.html_url}" target="_blank">
                                ${repo.name}
                                <ul class="repo-info">
                                  <li>🍴${repo.forks_count}</li>
                                  <li>⭐${repo.stargazers_count}</li>
                                  <li>👀${repo.watchers_count}</li>
                                  <li>👅${repo.language}</li>
                                </ul>
                              </a>
                            </li>`;
    });

    if (user.repositories.length > 0) {
      this.userProfile.innerHTML += `<div class="repositories section">
                      <h2>
                      Repositories
                      </h2>                                                          
                      <ul>
                      ${repositoriesItens}
                      </ul>
                    </div>`;
    } else {
      this.userProfile.innerHTML += `<div class="repositories section">
                      <h2>
                      Repositories
                      </h2>                                                          
                      <p>
                      ${user.name} não possui repositorios
                      </p>
                    </div>`;
    }
    this.renderEvents(user);
  },
  renderNotFound() {
    this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>";
  },
  renderEvents(user) {
    let eventsItens = ""
    if (user.events.length > 0) {
      user.events.forEach((event) => {
        if (event.type === "PushEvent") {
          eventsItens += `<li><span class="repoName">${event.repo.name}</span>  <span class="message">${event.payload.commits[0].message}</span></li>`;
        } else if (event.type === "CreateEvent") {
          eventsItens += `<li><span class="repoName">${event.repo.name}</span>  <span class="message">Sem mensagem de commit</span></li>`;
        }
      });
    } else {
      eventsItens = `<li>Nenhum registro encontrado</li>`;
    }

    this.userProfile.innerHTML +=`<div class="events section">
                                    <h2>Last 10 Events</h2>
                                    <ul>
                                    ${eventsItens}
                                    </ul>
                                  </div>`;
  },
};

export { screen };
