import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
      
      <Router>  
        <Routes>
        
          <Route exact path="/" element={<Home/>} />
        </Routes>
          <Navigate to="/" />
     
      </Router>
        
      
  );
}

export default App;
