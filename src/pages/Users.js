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
    },
    {
        name: 'NoDebuff',
        url: 'http://discord.com/invite/JjCEV8X',
        ip: 'nodebuff.net'
    }
]

const UserPlayers = ({ players }) => {
    if (players === null) {
        return <div>Pinging...</div>
    }

    if (players.status) {
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
                const resp = await window.fetch('https://mcapi.ca/ping/all/' + ip)
                setPlayers(await resp.json())
            } catch (e) {
                setPlayers({ status: false })
            }
        }

        fetchPlayersData()
    }, [])

    return (
        <div className="col m3">
            <div className="col favicon-col user">
                {players && players.favicon ? <img src={players.favicon} alt={name} width="64" height="64" /> : null}
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

function partition(arr, by) {
    const split = []
    for (let i = 0; i < arr.length; i += by) {
        split.push(arr.slice(i, Math.min(arr.length, i + by)))
    }
    return split
}

const Users = () => {
    const usersPartition = partition(users, 4)
    return <div className="container">
        <div className="row intro">
            <div className="col s12">
                <h1>Who's Using Velocity?</h1>
                <p>
                    These networks are powered by Velocity. Want yours added? <a href="https://docs.google.com/forms/d/e/1FAIpQLSdFeOdwtSPZjK3lJVzwEI_hyYMGDxUsCmcQm7IRDTFZTkgSGw/viewform">Let us know!</a>
                </p>
            </div>
        </div>
        {usersPartition.map((users, i) => {
            return <div className="row" key={i}>
                {users.map((user) => <User {...user} key={user.name} />)}
            </div>
        })}
    </div>
}

export default Users