import { useParams } from 'react-router'
import Post from '../components/Post'
import logo from '../../public/logo.png'
import { Link } from 'react-router'
import { useState, useEffect } from 'react'

export default function Profile() {
    const params = useParams();
    const userId = Number(params.userId);

    const [profile, setProfile] = useState(null);
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:8080/api/profile/public/" + userId, {
            method: "GET"
        }).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        }).then(data => setProfile(data))
        .catch(error => {
            console.log("Error:", error);
        });
    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/api/post/public/" + userId, {
            method: "GET"
        }).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        }).then(data => setPosts(data))
        .catch(error => {
            console.log("Error:", error);
        });
    }, []);

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
                <div className="topBar">
                    <Link to="/home">
                        <div className="logoContainer">
                            <img src={logo} alt="Clonestagram" />
                        </div>
                    </Link>
                </div>
                <hr></hr>
            </header>
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