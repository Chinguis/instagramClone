import { useParams } from 'react-router'
import { getPostsByUserId, getProfile } from '../services/service'
import Post from '../components/Post'
import logo from '../../public/logo.png'
import { Link } from 'react-router'

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
            <header>
                <Link to="/home">
                    <div className="logoContainer">
                        <img src={logo} alt="Clonestagram" />
                    </div>
                </Link>
            </header>
            <hr></hr>
            <div className="profile">
                {profile ?
                <>
                <div className="bigProfilePicture">
                    <img src={"/" + profile.profilePicture} alt="User's profile picture" />
                </div>
                <span>{profile.name}</span>
                </>
                : <span>This user does not exist.</span>
                }
            </div>
            <div className="postGrid">
                {postElements}
            </div>
        </>
    )
}