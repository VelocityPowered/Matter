import React, { useState, useEffect } from 'react';
import "./Users.css";
import Jumbotron from "../components/Jumbotron";

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

    if (players.status) {
        return <div>{players.players.now} players online</div>
    } else {
        return <div>Offline</div>
    }
}

const User = ({ name, url, ip }) => {
    const [result, setPlayers] = useState(null)
    useEffect(() => {
        async function fetchPlayersData() {
            try {
                const resp = await window.fetch('https://mcapi.us/server/status?ip='+ ip +'&port=25565')
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
                {result && result.favicon ? <img src={result.favicon} alt={name} width="64" height="64" /> : null}
            </div>
            <div className="col user">
                <a href={url} className="user-title">
                    {name}
                </a>
                <UserPlayers players={result} />
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
    return <>
            <Jumbotron title="Who's Using Velocity?">
            <p> These networks are powered by Velocity. Want yours added? <a href="https://docs.google.com/forms/d/e/1FAIpQLSdFeOdwtSPZjK3lJVzwEI_hyYMGDxUsCmcQm7IRDTFZTkgSGw/viewform">Let us know!</a></p>
        </Jumbotron>
        <div className="container userContainer">
            {usersPartition.map((users, i) => {
                return <div className="row" key={i}>
                    {users.map((user) => <User {...user} key={user.name} />)}
                </div>
            })}
        </div>
    </>
}

export default Users