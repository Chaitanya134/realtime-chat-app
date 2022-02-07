import './scss/style.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Authenticate from './components/Authenticate';
import Main from './components/Main';
import UserProvider from './contexts/UserProvider';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<Authenticate />} />
          <Route path="/chat" exact element={<Main />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
