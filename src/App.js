import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import UserDashboardPage from './components/UserDashboard/UserDashboardPage';
import LoginPage from './components/Authentication/LoginPage';
import SignupPage from './components/Authentication/SignupPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<UserDashboardPage/>}/>
          <Route exact path='/login' element={<LoginPage/>}/>
          <Route exact path='/signup' element={<SignupPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
