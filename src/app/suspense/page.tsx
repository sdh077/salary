import { Suspense, lazy } from 'react'
import Albums from './Album'

export default function Posts() {
    const Weather = lazy(() => import('./Weather.tsx'));

    return (
        <section>
            <Suspense fallback={<p>Loading feed...</p>}>
                <Albums artistId={'the-beatles'}/>
            </Suspense>
            <Suspense fallback={<p>Loading weather...</p>}>
                <Weather id={2}/>
            </Suspense>
        </section>
    )
}


