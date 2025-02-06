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
        setLiked(prev => !prev);
    }

    return (
        <div className="post">
            <div className="postHeader">
                <Link to={"/profile/" + userId}>
                    <div className="profilePictureContainer">
                        <img src={"/" + userProfilePicture} alt="user profile picture" />
                    </div>
                </Link>
                <span className="userName">{userName}</span>
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
                <span>Likes : {likeCount}</span>
                <button onClick={handleClick}>
                    <img src={liked ? thumbsUpClicked : thumbsUp} alt="Like"></img>
                </button>
            </div>
        </div>
    )
}