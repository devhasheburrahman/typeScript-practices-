import { useState } from 'react'

export const loggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogIn = () => {
        setIsLoggedIn(true)
    }
    
    const handleLogOut = () => {
        setIsLoggedIn(false)
    }
    return (
        <div>
            <button onClick={handleLogIn}> login</button>
            <button onClick={handleLogOut}>Logout</button>
            <div>User is {isLoggedIn ? "logged In" : "logged out"}</div>
        </div>
    )
}
