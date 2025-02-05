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

    function handleClick() {
        setLiked(prev => !prev);
    }

    return (
        <div className="post">
            <div>
                <Link to={"/profile/" + userId}>
                    <img src={"/" + userProfilePicture} alt="user profile picture" />
                </Link>
                <span>{userName}</span>
                <span>{datePosted}</span>
            </div>
            <div>
                <span>{caption}</span>
            </div>
            <div>
                <img src={"/" + image} alt="post image" />
            </div>
            <span>Likes : {likes}</span>
            <button onClick={handleClick}>
                <img src={liked ? thumbsUpClicked : thumbsUp} alt="Like"></img>
            </button>
        </div>
    )
}