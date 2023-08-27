import Cookie from "js-cookie";


function setCookie(cookiename, usrin) {
    Cookie.set(cookiename, usrin, {
        expires: 1,
        secure: true,
        sameSite: 'strict',
        path: "http:localhost:3000"
    })
}

export default setCookie