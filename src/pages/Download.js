import React from 'react';
import {ButtonLink} from "../components/Button";
import {ProgressBar, Select} from 'react-materialize';
import "./Download.css";

const Build = ({ name, version, buildNumber, date, download }) => (
    <div className="build">
        <div className="build-name">{name} {version} (#{buildNumber})</div>
        <div className="build-release">Released {date}</div>
        <ButtonLink href={download} external={true}>
            <i className="material-icons left">archive</i> Download
        </ButtonLink>
    </div>
);

export default class Download extends React.Component {
    constructor() {
        super();
        this.state = {done: true};
    }

    async componentDidMount() {
        const allProjectsResponse = await window.fetch('http://localhost:8000/v1/releases/');
        if (!allProjectsResponse.ok) {
            this.setState({error: true});
            return;
        }

        const allProjects = await allProjectsResponse.json();
        if (!allProjects.ok) {
            this.setState({error: true});
            return;
        }

        // we have the projects from the API

        setTimeout(() => this.setState({done: true}), 3000);
    }

    render() {
        return (
            <div className="container">
                <div className="row intro">
                    <div className="col s12">
                        <h1>Download Velocity</h1>
                        <p>
                            You can download Velocity below. Make sure you select the correct version for your version
                            of Minecraft. Once you've got it, <a href="https://docs.velocitypowered.com/en/latest/users/getting-started.html">
                            install and configure Velocity</a>.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        {this._renderDownloads()}
                    </div>
                </div>
            </div>
        )
    }

    _renderDownloads() {
        if (!this.state.done) {
            return <ProgressBar/>
        }

        const avail = ['1.8', '1.9', '1.10', '1.11', '1.12', '1.13', '1.14'].reverse();

        return (
            <div>
                <div className="row">
                    <Select label="Version" value="1.14" onChange={() => {}}>
                        {avail.map((v) => <option value={v}>{v}</option>)}
                    </Select>
                </div>

                <div className="section">
                    <div className="row recommended-download">
                        <div className="col l4 m6">
                            <h3>Stable build</h3>
                            <p>Best if you are starting out, are upgrading from a previous version, and value stability.</p>
                        </div>
                        <div className="col m8">
                            <Build buildNumber={42} name={"Velocity"} date={"April 29, 2019"} version={"1.0.0"} />
                        </div>
                    </div>
                </div>

                <div className="divider"/>

                <div className="section">
                    <div className="row">
                        <div className="col l4 m6">
                            <h3>Other builds</h3>
                            <p>
                                Best if you want to use the latest and greatest features, at the cost of potential bugs
                                and instability.
                            </p>
                        </div>
                        <div className="col m8">
                            <div className="row">
                                <div className="col s12">
                                    <Build buildNumber={42} name={"Velocity"} date={"April 29, 2019"} version={"1.0.0"} />
                                </div>
                                <div className="col s12">
                                    <Build buildNumber={42} name={"Velocity"} date={"April 29, 2019"} version={"1.0.0"} />
                                </div>
                                <div className="col s12">
                                    <Build buildNumber={42} name={"Velocity"} date={"April 29, 2019"} version={"1.0.0"} />
                                </div>
                                <div className="col s12">
                                    <Build buildNumber={42} name={"Velocity"} date={"April 29, 2019"} version={"1.0.0"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}