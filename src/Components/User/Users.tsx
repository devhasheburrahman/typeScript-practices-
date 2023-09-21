import { useContext, } from 'react'
import { UserContext, } from './userContext'

export const Users = () => {
    const userContext = useContext(UserContext)

    const handleLogIn = () => {
   
            userContext.setUser({
                name: "hashebur",
                email: "info@email.com"
            })
        }
    
    const handleLogOut = () => {
        
            userContext.setUser(null)
        
    }

    return (
        <div>
            <button onClick={handleLogIn}> login</button>
            <button onClick={handleLogOut}> Log out</button>

            <div>User  name is : {userContext.user?.name} </div>
            <div>User email is : {userContext.user?.email} </div>
        </div>
    )
}
