import React from 'react';
import {LargeButtonLink} from "../components/Button";
import './Community.css';
import Jumbotron from "../components/Jumbotron";

export const Community = () => (
    <div>

        <Jumbotron darken="darken-4" title="Join Our Community"
                   subtitle=" The Velocity community welcomes all with open arms. Whether you like to play with the internals
                of the Minecraft server, run a server, or write plugins, we've got a place for you in our community." />

        <div className="row">
            <div className="col m6 s12 no-pad">
                <div id="community-forums-blurb" className="community-platform">
                    <div className="container white-text">
                            <h4>Forums</h4>
                            <p>
                                Our forums are your source for important news about Velocity, along with providing a place
                                to discuss Velocity, discovering Velocity plugins, and talking to other server administrators
                                and plugin developers.
                            </p>

                            <LargeButtonLink href="https://forums.velocitypowered.com">
                                <i className="material-icons left">forum</i> Join the Velocity forums
                            </LargeButtonLink>
                    </div>
                </div>
            </div>

            <div className="col m6 s12 no-pad">
                <div id="community-discord-blurb" className="community-platform">
                    <div className="container white-text">
                            <h4>Discord</h4>
                            <p>
                                Discord is a popular option for many gamers to communicate with each other. We have a Discord
                                community server that anyone can join. This is the best choice if you're new to Velocity and want
                                support in real-time.
                            </p>

                            <iframe src="https://discordapp.com/widget?id=472484458856185878&theme=dark" width="100%"
        height="400" allowTransparency="true" frameBorder="0" id="discord-widget"/>
                        </div>
                </div>
            </div>
        </div>

    </div>
);