//import Footer from "./components/Footer";
//import mainbg from './image/main-bg.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="bg-image d-flex align-items-center" id="log-page">
      <div className="col-3 mx-auto text-center shadow p-3 bg-white rounded" id="signin">
          <h1>mapro</h1>
          <p>Signin to access data</p>
          <input type="email" className="form-control mt-5" placeholder="Email" />
          <input type="password" className="form-control mt-5" placeholder="Password" />
          <Button className="mt-5">Sign in</Button>
          <p className="mt-5">Sign up</p>
      </div>
    </div>
  );
}

export default App;
