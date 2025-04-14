import React from "react";
import { Link as LinkRouter} from "react-router";

import './index.scss';

interface LinkProps {
    children : React.ReactNode;
    href : string
}

export const Link:React.FC<LinkProps> = ({children, href}) => {
    return (
        <LinkRouter to={href} className="link">{children}</LinkRouter>
    )
}