import logo from './logo.svg';
import './App.css';

import {GoogleLogin} from 'react-google-login'

const responseGoogle = (response) => {
  console.log(response);
} 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1> Calendar API Login</h1>
        </div>
        <div>
          <GoogleLogin clientId='1062515714621-35tek1at77jjse1o47cqa1trok77uses.apps.googleusercontent.com'
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
