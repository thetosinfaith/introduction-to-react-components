function Student({ isAdmitted }){
    return(
        <div>
            {isAdmitted ? (
                <h1>You've been offered Admission, user</h1>

            ) : (

                <h1>Your application was unsuccessful.</h1>
            )}
        
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Student />);