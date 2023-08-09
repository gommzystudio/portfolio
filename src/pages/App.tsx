import Home from "./home";
import React from "react";
import {Analytics} from '@vercel/analytics/react';

export default function App() {
    return <>
        <Home/>
        <Analytics/>
    </>;
}
