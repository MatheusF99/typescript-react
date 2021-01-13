import React from 'react'

interface userProps{
    name: string,
    email: string,
}
interface Props{
    user: userProps
}



const User: React.FC<Props> = ({user}) =>{
    return(
        <div>
            <strong>Nome: </strong>{ user.name} <br/>
            <strong>email: </strong>{ user.email} <br/>

        </div>
    )
}
export default User