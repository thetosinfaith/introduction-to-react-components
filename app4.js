const User = ({ data }) => {

    if (!data) {
        return <p>Something went wrong. Please try again later.</p>;
    }
  
    return <div>{

       <p>Swipe to check user data</p>

       }
       
       </div>;
  };

  
  ReactDOM.createRoot(document.getElementById('root')).render(<User />);