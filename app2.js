const SchoolApplication = ({user}) => {

    if(user.role === 'Admin'){
        return <p>Welcome, Admin</p>

    }else if(user.role === 'Student'){
        return <p>Welcome, Student</p>
    }

    else{
        return <p>You are not authorized to access this page</p>
    }

}

ReactDOM.createRoot(document.getElementById('root')).render(<SchoolApplication />);