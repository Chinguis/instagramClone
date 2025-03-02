import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import thumbsUp from '/thumbs-up.svg'
import thumbsUpClicked from '/thumbs-up-clicked.svg'
import { useState } from 'react'
import { Link } from 'react-router'

export default function Post({
    id, userId, userName, userProfilePicture, datePosted, caption, image, likes
}) {
    const [liked, setLiked] = useState(false);

    const likeCount = liked ? likes + 1 : likes;

    function handleClick() {
        if (liked) {
            fetch("http://localhost:8080/api/post/unlike/" + id, {
                method: "POST",
                credentials: "include",
            }).then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                setLiked(false);
            })
            .catch(error => {
                console.log("Error:", error);
            });
        } else {
            fetch("http://localhost:8080/api/post/like/" + id, {
                method: "POST",
                credentials: "include",
            }).then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                setLiked(true);
            })
            .catch(error => {
                console.log("Error:", error);
            });
        }
    }

    return (
        <div className="post">
            <div className="postHeader">
                <Link to={"/profile/" + userId}>
                    <div className="profilePictureContainer">
                        <img src={"/" + userProfilePicture} alt="user profile picture" />
                    </div>
                </Link>
                <Link to={"/profile/" + userId} className="userName">
                    <span>{userName}</span>
                </Link>
                <span>{datePosted}</span>
            </div>
            <hr></hr>
            <div className="caption">{caption}</div>
            <div>
                <div className="imageContainer">
                    <img src={"/" + image} alt="post image" />
                </div>
            </div>
            <div className="postFooter">
                <button onClick={handleClick}>
                    {liked ?
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48", fontSize: "2rem"}}>favorite</span>
                    : <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48", fontSize: "2rem"}}>favorite</span>
                    }
                </button>
                <span>{likeCount}</span>
            </div>
        </div>
    )
}