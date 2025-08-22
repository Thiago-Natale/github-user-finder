const user = {
    avatar_url: '',
    name: '',
    bio:'',
    userName:'',
    followers:'',
    following:'',
    repositories:[],
    events:[],
    setInfo(githubUser){
        this.avatar_url = githubUser.avatar_url
        this.name = githubUser.name
        this.bio = githubUser.bio
        this.userName = githubUser.login
        this.followers = githubUser.followers
        this.following = githubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
    },
    setEvents(events) {
        this.events = events
    }
}

export {user}