import { useState } from 'react';

export function TwitterFollowCard({ userName, name }) {

    /* COMPROBAR SI ESTA SIGUIENDO */
    const [isFollowing, setIsFollowing] = useState(false)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    return (
        <article className="tw-followCard" /* style={{ display:"flex", color:"#fff", alingItems:'center'}} */>
            <header className="tw-followcard-Name">
                <img src={`https://unavatar.io/${userName}`} />
                <div>
                    <strong>{name}</strong>
                    <span>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>{text}</button>
            </aside>
        </article>
    )
}