function Inbox({ isRead }){
    return(
        <div>
            {isRead ? (
                <h1>You've a new message</h1>

            ) : (

                <h1>Save to draft? </h1>
            )}
        
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Inbox />);