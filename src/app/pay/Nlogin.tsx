'use client'
import Script from 'next/script'

export default function page() {
    return (
        <>
            <div id="naver_id_login"></div>
            <Script src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js"
                onReady={() => {
                    const nil = new naver_id_login("9zIJ2rGFfyQp5ntVXX8x", "http://localhost:5173/naver/callback");
                    const state = nil.getUniqState();
                    nil.setButton("white", 2, 40);
                    nil.setDomain("http://localhost:5173/naver/login");
                    nil.setState(state);
                    nil.setPopup();
                    nil.init_naver_id_login();
                }}
            />
        </>
    )
}
