'use client'
import Script from 'next/script'

export default function page() {
    return (
        <>
            <div id="nil"></div>
            <Script src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js"
                onReady={() => {
                    var nil = new naver_id_login("9zIJ2rGFfyQp5ntVXX8x", "/naver/callback");
                    // 접근 토큰 값 출력
                    alert(nil.oauthParams.access_token);
                    // 네이버 사용자 프로필 조회
                    nil.get_naver_userprofile("naverSignInCallback()");
                    // 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
                    function naverSignInCallback() {
                        alert(nil.getProfileData('email'));
                        alert(nil.getProfileData('nickname'));
                        alert(nil.getProfileData('age'));
                    }
                }}
            />
        </>
    )
}
