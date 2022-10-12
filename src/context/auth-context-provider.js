import { useCallback, useEffect, useState } from "react";
import AuthContext from "./auth-context"

let logoutTimer;

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();

    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
}

const retriveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');
    const remainingTime = calculateRemainingTime(storedExpirationDate);
    if (remainingTime < 3600) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }
    return {
        token: storedToken,
        duration: remainingTime
    };
}

const AuthContextProvider = props => {
    const tokenData = retriveStoredToken();

    let initialToken;
    if (tokenData) {
        initialToken = tokenData.token;
    }

    const [token, setToken] = useState(initialToken);

    const isLoggedIn = !!token;

    const loginHandler = (newToken, expirationTime) => {
        setToken(newToken);
        localStorage.setItem('token', newToken);
        localStorage.setItem('expirationTime', expirationTime);

        const remainingTime = calculateRemainingTime(expirationTime);

        logoutTimer = setTimeout(logoutHandler, remainingTime);
    }

    const logoutHandler = useCallback(() => {
        console.log(2);
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }, []);

    useEffect(() => {
        if (tokenData) {
            console.log(1);
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }
    }, [tokenData, logoutHandler]);

    return <AuthContext.Provider value={{ isLoggedIn, token, login: loginHandler, logout: logoutHandler }}>{props.children}</AuthContext.Provider>
}

export default AuthContextProvider;