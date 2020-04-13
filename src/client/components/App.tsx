import * as React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Main from '../containers/Main';
import LearnMore from '../containers/LearnMore';
import '../../../styles/application.scss';
import Logo from '../../../image/Group3.png';
import Title from '../../../image/title.png'

const App: React.FC<{}> = () => (
  <div className="app">
  <Router>
  <Switch>
    <Route path = '/main'>
      <Main />
    </Route>
    <Route path = '/learnmore'>
      <LearnMore />
    </Route>
    <Route path = '/'>
      <img className = "logo" src = {Logo}></img>
      <img src = "/image/title.png"></img>
      <br></br>
      <br></br>
      <br></br>
      <Link to='/main'><button>Get Started</button></Link>
      <br></br>
      <Link to="/learnmore"><button>Learn More</button></Link>
    </Route>
  </Switch>
    </Router>
  </div>
);

export default App;