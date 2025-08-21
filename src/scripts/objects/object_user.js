const user = {
    avatar_url: '',
    name: '',
    bio:'',
    userName:'',
    repositories:[],
    setInfo(githubUser){
        this.avatar_url = githubUser.avatar_url
        this.name = githubUser.name
        this.bio = githubUser.bio
        this.userName = githubUser.login
    },
    setRepositories(repositories){
        this.repositories = repositories
    }
}

export {user}