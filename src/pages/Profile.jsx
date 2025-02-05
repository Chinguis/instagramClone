import { useParams } from 'react-router'
import { getPostsByUserId, getProfile } from '../services/service'
import Post from '../components/Post'

export default function Profile() {
    const params = useParams();
    const userId = Number(params.userId);

    const profile = getProfile(userId);

    const posts = getPostsByUserId(userId);

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
            <p>Profile component</p>
            {profile ? 
            <p>Name: {profile.name} <img src={"/" + profile.profilePicture} alt="User's profile picture"/></p>
            : <p>This user does not exist.</p>
            }
            {postElements}
        </>
    )
}