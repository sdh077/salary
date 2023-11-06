'use client'
import useWindowSize from "../hooks/useWindowSize"

const ScreenDimensions = () => {
    const windowSize = useWindowSize()

    return (
        <>
            <p>Current screen width: {windowSize.width}</p>
            <p>Current screen height: {windowSize.height}</p>
        </>
    )
}
export default ScreenDimensions;