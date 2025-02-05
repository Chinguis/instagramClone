import posts from '../mockData/posts.json'
import profiles from '../mockData/profiles.json'

export function getPosts() {
    let postsWithUsers = posts.map((post) => {
        let userProfile = profiles.find(profile => profile.id === post.userId);
        post = {...post, user: userProfile};
        return post;
    })

    return postsWithUsers;
}

export function getPostsByUserId(userId) {
    let myPosts = posts.filter(post => post.userId === userId);
    
    let postsWithUsers = myPosts.map((post) => {
        let userProfile = profiles.find(profile => profile.id === post.userId);
        post = {...post, user: userProfile};
        return post;
    })

    return postsWithUsers;

} 

export function getProfile(userId) {
    let userProfile = profiles.find(profile => profile.id === userId);
    return userProfile;
}