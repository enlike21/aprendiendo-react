import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

const users = [
    {
        userName: 'enlike20',
        name: 'enrique velez'
    },
    {
        userName: 'TMChein',
        name: 'Tomas moreno'
    }
]
{/*             <TwitterFollowCard userName="midudev" name="miguel angel" />
            <TwitterFollowCard userName="enlike20" name="juanito" />
            <TwitterFollowCard userName="enlike20" name="juanito" /> */}

export function App() {
    return (
        <section className="App">
            {
                users.map(({ userName, name }) => (
                    < TwitterFollowCard key={userName} userName={userName} name={name} />
                ))
            }

        </section>

    )
}