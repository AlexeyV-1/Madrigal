'use client'

import { Header } from "@/components/Common/Header"
import { QueryMain } from "./QueryMain"
import { ProgressLoader } from "../Common/ProgressLoader"
import { useState } from "react"
import clsx from 'clsx'

export default function QueryPage() {
    const [loading, setLoading] = useState(false)
    const [loadingAnimation, setLoadingAnimation] = useState(false)
    const [loadingStart, setLoadingStart] = useState(false)
    const [loadingAnimationFinish, setLoadingAnimationFinish] = useState(false)
    const [loadingFinish, setLoadingFinish] = useState(false)
    const [monthlyChart, setMonthlyChart] = useState(false)

    const toggleAnimation = () => {
        setLoadingAnimation(true)
        setTimeout(() => {
            setLoading(true)
        }, 500)
        setTimeout(() => {
            setLoadingStart(true)
        }, 1000)
        setTimeout(() => {
            setMonthlyChart(true)
        }, 1500)
        setTimeout(() => {
            setLoadingFinish(true)
        }, 3600)
        setTimeout(() => {
            setLoadingAnimationFinish(true)
        }, 4100)
        setTimeout(() => {
            setLoadingAnimationFinish(false)
            setLoadingFinish(false)
            setLoadingStart(false)
            setLoading(false)
            setLoadingAnimation(false)
        }, 4600)
    }

    return (

        <div
            className={clsx('animation-wrapper', {
                'animation-wrapper--loading': loadingAnimation,
                'animation-wrapper--finished': loadingAnimationFinish,
            })}
        >
            <Header page="query" />
            <ProgressLoader
                target={loadingStart ? 100 : 0}
                duration={2600}
                className={
                    clsx('animation-wrapper', {
                        'progress-loader--process' : loading,
                        'progress-loader--finished' : loadingFinish
                    })}
            />
            <main>
                <QueryMain animationFn={toggleAnimation} monthlyChart={monthlyChart} />
            </main>
        </div>
    )
}