import React from 'react';
import {Link} from "react-router-dom";

const InternalButtonLink = ({ href, btnClasses, children }) => {
    href = href || '#'
    if (!href.startsWith("/")) {
        return <a href={href} className={"waves-effect waves-light " + btnClasses}>{children}</a>
    } else {
        return <Link to={href} className={"waves-effect waves-light " + btnClasses}>{children}</Link>
    }
};

export const ButtonLink = (params) => <InternalButtonLink {...params} btnClasses="btn" />;

export const LargeButtonLink = (params) => <InternalButtonLink {...params} btnClasses="btn-large" />;

export const JumbotronButtonLink = (params) => <InternalButtonLink {...params} btnClasses="btn-large grey darken-4" />;