import React, { useState, useEffect } from 'react';
import "./Users.css";

const users = [
    {
        name: 'Mineteria',
        url: 'https://mineteria.com',
        ip: 'fun.mineteria.com'
    },
    {
        name: 'N3FS',
        url: 'https://n3fs.co.uk/',
        ip: 'mc.n3fs.co.uk'
    },
    {
        name: 'Patheria',
        url: 'https://patheria.net/',
        ip: 'patheria.net'
    },
    {
        name: 'MilSpecSG',
        url: 'https://www.milspecsg.rocks/',
        ip: '1122.milspecsg.rocks'
    },
    {
        name: 'Zentria',
        url: 'https://zentria.ee/',
        ip: 'play.zentria.ee'
    },
    {
        name: 'Quad',
        url: 'https://quad.gg/',
        ip: 'quad.gg'
    }
]

const UserPlayers = ({ players }) => {
    if (players === null) {
        return <div>Pinging...</div>
    }

    if (players.online) {
        return <div>{players.players.online} players online</div>
    } else {
        return <div>Offline</div>
    }
}

const User = ({ name, url, ip }) => {
    const [players, setPlayers] = useState(null)
    useEffect(() => {
        async function fetchPlayersData() {
            try {
                const resp = await window.fetch('https://api.mcsrvstat.us/2/' + ip)
                setPlayers(await resp.json())
            } catch (e) {
                setPlayers({ online: false })
            }
        }

        fetchPlayersData()
    }, [])

    return (
        <div className="col m3">
            <div className="col favicon-col user">
                {players && players.icon ? <img src={players.icon} alt={name} width="64" height="64" /> : null}
            </div>
            <div className="col user">
                <a href={url} className="user-title">
                    {name}
                </a>
                <UserPlayers players={players} />
            </div>
        </div>
    )
}

const Users = () => {
    return <div className="container">
        <div className="row intro">
            <div className="col s12">
                <h1>Who's Using Velocity?</h1>
                <p>
                    These networks are powered by Velocity. Want yours added?
                </p>
            </div>
        </div>
        <div className="row">
            {users.map((user) => <User {...user} key={user.name} />)}
        </div>
    </div>
}

export default Users