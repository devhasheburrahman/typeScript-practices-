

type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn ? ` welcome to {props.name} ! you have {props.messageCount} unread message`:`welcome Guest`
                }


            </h2>
        </div>
    )
}
