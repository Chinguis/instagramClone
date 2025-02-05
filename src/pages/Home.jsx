import Post from '../components/Post'
import { getPosts } from '../services/service'

export default function Home() {
    const posts = getPosts();
    console.log(posts);
    const postElements = posts.map((post) => {
        return (
            <Post 
                key={post.id}
                id={post.id}
                userId={post.userId}
                userName={post.user.name}
                userProfilePicture={post.user.profilePicture}
                datePosted={post.datePosted}
                caption={post.caption}
                image={post.image}
                likes={post.likes}
            />
        )
    });

    return (
        <>
            <p>Home component</p>
            {postElements}
        </>
    )
}