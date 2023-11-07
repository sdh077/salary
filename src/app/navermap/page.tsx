'use client'
import Script from 'next/script'
import { useEffect, useRef, useState } from 'react';

export type NaverMap = naver.maps.Map;

export default function page() {
    const mapRef = useRef<NaverMap | null>(null);
    const [load, setLoad] = useState(false)
    useEffect(() => setLoad(true), [])
    const initializeMap = () => {
        const mapOptions = {
            center: new window.naver.maps.LatLng(37.3595704, 127.105399),
            zoom: 10,
            minZoom: 9,
            scaleControl: false,
            mapDataControl: false,
            logoControlOptions: {
                position: naver.maps.Position.BOTTOM_LEFT,
            },
        };
        //새로운 네이버 맵 인스턴스 생성 
        const map = new window.naver.maps.Map('map', mapOptions);
        mapRef.current = map;
    }
    if(!load) return <div></div>
    return (
        <>
            <Script
                strategy="afterInteractive"
                type="text/javascript"
                src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=???`}
                onReady={initializeMap}
            />
            <div id='map' style={{ width: '500px', height: '500px' }} />
        </>
    )
}
