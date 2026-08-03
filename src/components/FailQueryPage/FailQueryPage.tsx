'use client'

import { Header } from "../Common/Header"
import clsx from "clsx"
import { useState } from "react"
import FailQueryMain from "./FailQueryMain"

export default function FailQueryPage() {
        const [pageAnimation, setPageAnimation] = useState(false)

    return (
        <div
            className={clsx('animation-wrapper', {
                'animation-wrapper--page-animated': pageAnimation,
            })}
        >
            <Header page="query" />
            <main>
                <FailQueryMain />
            </main>
        </div>
    )
}