import React, { Component } from 'react';
import './Index.css';
import { ButtonLink, JumbotronButtonLink } from "../components/Button";
import Jumbotron from "../components/Jumbotron"

const Sponsor = ({ name, icon, url }) => (
    <div className="Sponsor">
        <a href={url}>
            <img src={icon} alt={name} width="300" height="70" />
        </a>
    </div>
);

const Sponsors = () => (
    <div className="container" id="sponsors-section">
        <div className="row">
            <div className="col m12">
                <h5 id="sponsors-header">The Velocity project is sponsored by</h5>
                <ul id="sponsors-row">
                    <li><Sponsor name="Mineteria" icon="https://mineteria.com/images/mineteria_logo.png" url="https://mineteria.com" /></li>
                </ul>
                <p>
                    Our sponsors provide us with the resources we need to provide you a high-quality proxy. Please
                    consider sponsoring us.
                </p>
            </div>
        </div>
    </div>
);

const Benefit = ({ iconName, title, children }) => (
    <div className="benefit col m4">
        <i className="material-icons benefit-icon">{iconName}</i>

        <h4>{title}</h4>
        {children}
    </div>
);

const Index = () => (
    <div id="Index">
        <Jumbotron title="Don't stop now." subtitle="Unleash the full power of your Minecraft server with Velocity, the next-generation high-performance Minecraft server proxy." />

        <div className="section front-section" id="benefits">
            <div className="container">
                <div className="row intro">
                    <div className="col m12">
                        <h3>You'll love Velocity.</h3>
                        <p>
                            Velocity is feature-packed - there's something for everyone. Whether you
                            run a small network for modded Minecraft or a large network, you can trust
                            Velocity to power your network.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <Benefit iconName="check_circle" title="It's simple to set up.">
                        <p>
                            You can set up Velocity in just a few minutes. No need to muck around with a bunch of different configuration
                            files or install dubious plugins on your server.
                        </p>
                        <ButtonLink href="https://docs.velocitypowered.com/en/latest/users/getting-started.html">
                            <i className="material-icons left">archive</i>Install Velocity
                        </ButtonLink>
                    </Benefit>

                    <Benefit iconName="build" title="Your server, your way.">
                        <p>
                            Velocity comes with excellent support for <a href="https://papermc.io">Paper</a>, <a href="https://www.spongepowered.org">Sponge</a>, and&nbsp;
                                    <a href="http://www.minecraftforge.net">Minecraft Forge</a>. We can respond to Minecraft updates quickly, so you'll never have an
                                    excuse to not update.
                        </p>
                        <ButtonLink href="https://docs.velocitypowered.com/en/latest/users/getting-started.html">
                            <i className="material-icons left">archive</i>Server support
                        </ButtonLink>
                    </Benefit>

                    <Benefit iconName="lock" title="Secure by default.">
                        <p>
                            Velocity comes with IP forwarding that is secure by default. Simply choose a secure password and put it
                            in your server configurations. Ward off griefers with hacked clients!
                        </p>
                        <ButtonLink href="https://docs.velocitypowered.com/en/latest/users/getting-started.html">
                            <i className="material-icons left">archive</i>Learn more
                        </ButtonLink>
                    </Benefit>
                </div>

                <div className="row">
                    <Benefit iconName="show_chart" title="It's crazy efficient.">
                        <p>
                            Velocity includes multiple optimizations that aren't included in other proxies, has
                            lower CPU and memory usage, and still supports the plugins you want.
                        </p>
                        <ButtonLink href="https://docs.velocitypowered.com/en/latest/users/getting-started.html">
                            <i className="material-icons left">archive</i>Learn more
                        </ButtonLink>
                    </Benefit>

                    <Benefit iconName="thumb_up" title="A pleasure to work with.">
                        <p>
                            Velocity features a user-friendly configuration file written in TOML, and provides
                            plugin developers with a flexible plugin API.
                        </p>
                        <ButtonLink href="https://docs.velocitypowered.com/en/latest/users/getting-started.html">
                            <i className="material-icons left">archive</i>Learn more
                        </ButtonLink>
                    </Benefit>

                    <Benefit iconName="favorite" title="Used by the very best.">
                        <p>
                            Velocity includes multiple optimizations that aren't included in other proxies, has
                            lower CPU and memory usage, and still supports the plugins you want.
                        </p>
                        <ButtonLink href="https://docs.velocitypowered.com/en/latest/users/getting-started.html">
                            <i className="material-icons left">archive</i>Learn more
                        </ButtonLink>
                    </Benefit>
                </div>
            </div>
        </div>

        <div className="divider" />
        <Sponsors />
    </div>
)

export default Index