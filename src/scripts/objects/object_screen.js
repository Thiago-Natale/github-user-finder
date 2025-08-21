const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `<div class="info">
                     <img src="${user.avatar_url}" />
                     <div class="data">
                         <h2>${user.name ?? "Não possui nome registrado"}</h2>
                         <p>${user.bio ?? "Não possui bio registrada"}</p>
                     </div>
                     </div>`;
    let repositoriesItens = "";
    user.repositories.forEach((repo) => {
      repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`;
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
    }else{
        this.userProfile.innerHTML += `<div class="repositories section">
                      <h2>
                      Repositories
                      </h2>                                                          
                      <p>
                      ${user.name} não possui repositorios
                      </p>
                    </div>`
    }
  },
  renderNotFound() {
    this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
  }
};

export { screen };
