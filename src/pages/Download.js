import React from 'react';
import {ButtonLink} from "../components/Button";
import PageIntro from "../components/PageIntro";
import "./Download.css";

const VELOCITY_VERSIONS = {
    '1.1.0': {
        name: '1.1.0',
        unstable: true,
        versions: [
            {
                version: '1.1.0-SNAPSHOT',
                link: 'https://ci.velocitypowered.com/job/velocity-1.1.0/lastSuccessfulBuild/artifact/proxy/build/libs/velocity-proxy-1.1.0-SNAPSHOT-all.jar'
            }
        ]
    },
    '1.0.0': {
        name: '1.0.x',
        stable: true,
        versions: [
            {
                version: '1.0.7',
                url: 'https://ci.velocitypowered.com/job/velocity/204/artifact/proxy/build/libs/velocity-proxy-1.0.7-all.jar',
                date: 'April 12, 2020'
            },
            {
                version: '1.0.5',
                url: 'https://ci.velocitypowered.com/job/velocity/192/artifact/proxy/build/libs/velocity-proxy-1.0.5-all.jar',
                date: 'Feburary 13, 2020'
            },
            {
                version: '1.0.4',
                url: 'https://ci.velocitypowered.com/job/velocity/187/artifact/proxy/build/libs/velocity-proxy-1.0.4-all.jar',
                date: 'December 23, 2019'
            },
            {
                version: '1.0.3',
                url: 'https://ci.velocitypowered.com/job/velocity/173/artifact/proxy/build/libs/velocity-proxy-1.0.3-all.jar',
                date: 'August 24, 2019'
            },
            {
                version: '1.0.2',
                url: 'https://ci.velocitypowered.com/job/velocity/164/artifact/proxy/build/libs/velocity-proxy-1.0.2-all.jar',
                date: 'July 19, 2019'
            },
            {
                version: '1.0.1',
                url: 'https://ci.velocitypowered.com/job/velocity/157/artifact/proxy/build/libs/velocity-proxy-1.0.1-all.jar',
                date: 'June 25, 2019'
            },
            {
                version: '1.0.0',
                url: 'https://ci.velocitypowered.com/job/velocity/149/artifact/proxy/build/libs/velocity-proxy-1.0.0-all.jar',
                date: 'June 12, 2019'
            }
        ]
    }
}

const Build = ({ name, version, date, download, sideBySide }) => (
    <div className={"build " + (sideBySide ? " side-by-side" : "")}>
        <div className="build-name">{name} {version}</div>
        {date && <div className="build-release">Released {date}</div>}
        <ButtonLink href={download} external={true}>
            <i className="material-icons left">archive</i> Download
        </ButtonLink>
    </div>
);

export default class Download extends React.Component {
    render() {
        return (
            <>
                <PageIntro>
                    <h1>Download Velocity</h1>
                    <p>
                        Choose a version of Velocity to download below. Once you've got it, <a href="https://docs.velocitypowered.com/en/latest/users/getting-started.html">
                        install and configure Velocity</a>.
                    </p>
                </PageIntro>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            {this._renderDownloads()}
                        </div>
                    </div>
                </div>
            </>
        )
    }

    _renderDownloads() {
        const currentStable = Object.values(VELOCITY_VERSIONS)
            .find(version => version.stable)
        const currentUnstable = Object.values(VELOCITY_VERSIONS)
            .find(version => !version.stable)
            .versions[0]
        const latestStableVersion = currentStable.versions[0]

        return (
            <div>
                <div className="section">
                    <div className="row recommended-download">
                        <div className="col l4 m6">
                            <h3>Stable build</h3>
                            <p>Best if you are starting out, are upgrading from a previous version, and value stability.</p>
                        </div>
                        <div className="col m8">
                            <Build name={"Velocity"} date={latestStableVersion.date} version={latestStableVersion.version}
                                download={latestStableVersion.url} />
                        </div>
                    </div>
                </div>

                <div className="divider"/>

                <div className="section">
                    <div className="row">
                        <div className="col l4 m6">
                            <h3>Development build</h3>
                            <p>Experiment with the newest features, optimizations, and more. Run at your own risk.</p>
                        </div>
                        <div className="col m8">
                            <Build name={"Velocity"} date={currentUnstable.date} version={currentUnstable.version}
                                download={currentUnstable.url} />
                        </div>
                    </div>
                </div>

                <div className="divider"/>

                <div className="section">
                    <div className="row">
                        <div className="col m12">
                            <h3>Old builds</h3>
                            <p>
                                Provided for reference only. No support is available for these builds.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {currentStable.versions.slice(1).map((build) => {
                            return <div className="col m3" key={build.version}>
                                <Build name={"Velocity"} date={build.date} version={build.version} download={build.url} sideBySide={true} />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}