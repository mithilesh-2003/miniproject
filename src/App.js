import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import Forget from './Forget';
import Header from './Header';
import Inputexample from './Inputexample';
import Countnumber from './Countnumber';
import Refrence from './Refrence';
import Fetch from './Fetch';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import Content from './Content';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/"element={<Login/>}/>
          <Route path='/Signup'element={<Signup/>}/>
          <Route path='/Forgetpassword'element={<Forget/>}/>
          {/* <Route path='Header'element={<Header/>}/> */}
          <Route path='/Inputexample'element={<Inputexample/>}/>
          <Route path='/Countnumber'element={<Countnumber/>}/>
          <Route path='/Refrence'element={<Refrence/>}/>
          <Route path='/Fetch'element={<Fetch/>}/>
          <Route path='/Dashboard'element={<Dashboard/>}/>
          <Route path='/Sidebar'element={<Sidebar/>}/>
          <Route path='/Content'element={<Content/>}/>
        </Routes>
  </div>
  
    </Router>
  );
}

export default App;
