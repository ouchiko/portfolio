import React, { Component } from "react";

export const Button = ({ href, text }) => (
    <a class="button" href={href}>
        {text}
    </a>
);