import React from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    token: '',
    login: (token) => { },
    logout: () => { }
});

export default AuthContext;