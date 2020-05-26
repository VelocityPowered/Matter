import React from 'react';
import {LargeButtonLink} from "../components/Button";
import PageIntro from "../components/PageIntro";
import './Community.css';

export const Community = () => (
    <div>
        <PageIntro>
            <h1>Join Our Community</h1>
            <p>
                The Velocity community welcomes all with open arms. Whether you like to play with the internals
                of the Minecraft server, run a server, or write plugins, we've got a place for you in our community.
            </p>
        </PageIntro>
        
        <div id="community-forums-blurb" className="community-platform">
            <div className="container white-text">
                <div className="row">
                    <div className="col s12">
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
        </div>

        <div id="community-discord-blurb" className="community-platform">
            <div className="container white-text">
                <div className="row">
                    <div className="col s12">
                        <h4>Discord</h4>
                        <p>
                            Discord is a popular option for many gamers to communicate with each other. We have a Discord
                            community server that anyone can join. This is the best choice if you're new to Velocity and want
                            support in real-time.
                        </p>

                        <iframe src="https://discordapp.com/widget?id=472484458856185878&theme=dark" width="350"
                                height="500" allowTransparency="true" frameBorder="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
);