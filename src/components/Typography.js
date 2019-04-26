import React, { Component } from "react";

/* Button */
export const Button = ({ href, text }) => (
    <a className="button" href={href}>
        <span>{text}</span>
    </a>
);

/* Avatar */
export const Avatar = ({ src }) => (
    <div className="avatar" style={{
        backgroundImage: `url(${src})`
    }}></div>
);