import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

import MainComponent from './components/MainComponent';
import RedirectComponent from './components/RedirectComponent';


const App = () => {

          return (
                      <Router>
                        <Route path="/:id" component={RedirectComponent} exact={true} />
                        <Route path="/" back={true} component={MainComponent} exact={true} />
                        <Route exact path="/" render={() => <Redirect to="/" />} />
                      </Router>
          );

};
//0 - under consideration by business,1 confirmed,2 rejected, 3 Suggest to update things
export default App;
