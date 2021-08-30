import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import BankList from './components/BankList';
import Addbank from './components/Addbank';
import { BrowserRouter as Router, Switch, Route ,Link} from 'react-router-dom';
import Appbar from './components/Appbar';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <Router>
        <Switch>
          <Route path="/banklist" component={BankList} />
          <Route path="/createbank" component={Addbank} />
          <Link to="/banklist" className="btn btn-secondary">Banks</Link>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
