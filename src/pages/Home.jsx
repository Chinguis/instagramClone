import Post from '../components/Post'
import { getPosts } from '../services/service'
import logo from '../../public/logo.png'

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
            <header>
                <div className="logoContainer">
                    <img src={logo} alt="Clonestagram" />
                </div>
            </header>
            <div className="postGrid">
                {postElements}
            </div>
        </>
    )
}