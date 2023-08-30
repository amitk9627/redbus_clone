import React, { createContext, useState } from 'react'
export const LoginData = createContext(null);

const AuthContext = ({ children }) => {
    const [logindata, setLogindata] = useState("");
    return (
        <LoginData.Provider value={{ logindata, setLogindata }}>
            {children}
        </LoginData.Provider>
    )
}

export default AuthContext;
