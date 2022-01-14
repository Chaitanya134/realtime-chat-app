import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Authenticate from './components/Authenticate';

function App() {
  return (
    <Authenticate />
  );
}

export default App;
