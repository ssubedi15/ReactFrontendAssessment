import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegistrationComponent from './components/RegistrationComponent';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
            <Switch> 
                  <Route path = "/" component={RegistrationComponent}></Route>
            </Switch>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
