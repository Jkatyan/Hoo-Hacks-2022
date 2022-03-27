import './App.css';
import axios from 'axios'

import {GoogleLogin} from 'react-google-login'

const responseGoogle = (response) => {
  console.log(response);
  const {code} = response;
  axios.post('/api/create-tokens', {code})
       .then(response => {
         console.log(response.data)
       })
       .catch(error=> {
         console.log(error.message)
       })
}      

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1> Calendar API Login</h1>
        </div>
        <div>
          <GoogleLogin clientId=''
                       buttonText='Sign In'
                       onSuccess={responseGoogle}
                       onFailure={responseGoogle}
                       cookiePolicy='single_host_origin'
                       responseType='code'
                       accessType='code'
                       scope='openid email profile https://www.googleapis.com/auth/calendar'
                       />
        </div>
      </header>
    </div>
  );
}

export default App;
