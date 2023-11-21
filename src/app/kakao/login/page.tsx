'use client'
import Script from 'next/script'
//npm i @types/kakao-js-sdk
export default function Page() {
    return (
        <>
            <Script src="https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js" crossOrigin="anonymous" integrity="sha384-mXVrIX2T/Kszp6Z0aEWaA8Nm7J6/ZeWXbL8UpGRjKwWe56Srd/iyNmWMBhcItAjH" onReady={() => {
                Kakao.init('b9852ef652d8420077a3141f259444e1');
                console.log(Kakao.isInitialized());
                Kakao.Auth.authorize({
                    redirectUri: 'http://localhost:5173/kakao/callback',
                  });
            }}/>
        </>
    )
}