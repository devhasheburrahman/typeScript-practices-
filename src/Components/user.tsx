import { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

// export const user = () => {
//     const [user, setUser] = useState<AuthUser | null>(null)

//     const handleLogIn = () => {
//         setUser({
//             name: "hashebur",
//             email: "Eseta@gmail.com"
//         })
//     }

//     const handleLogOut = () => {
//         setUser(null)
//     }
//     return (
//         <div>
//             <button onClick={handleLogIn}> login</button>
//             <button onClick={handleLogOut}>Logout</button>
//             <div>User  name is {user?.name}</div>
//             <div>User email is {user?.email}</div>
//         </div>
//     )
// }

export const user = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogIn = () => {
        setUser({
            name: "hashebur",
            email: "Eseta@gmail.com"
        })
    }

    return (
        <div>
            <button onClick={handleLogIn}> login</button>

            <div>User  name is {user.name}</div>
            <div>User email is {user.email}</div>
        </div>
    )
}
