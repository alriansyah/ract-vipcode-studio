import { useRouteError } from "react-router-dom";

import React from 'react'

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div className="flex justify-center gap-4 min-h-screen items-center flex-col">
            <h1 className="text-3xl font-bold">Oops!</h1>
            <p className="my-5 text-xl">Sorry, an unexpected error has accured</p>
            <p className="text-lg">{error.statusText || error.message}</p>
        </div>
    )
}
