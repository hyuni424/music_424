import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Album from './component/Album.js';
import EmptyPage from './component/EmptyPage.js';
import Music from './component/Music.js';

function App() {
  return (
    <BrowserRouter>
        <div className="albumArea">
          <Switch>
            <Route exact path="/">
              <Album/>
            </Route>
            <Route path="/music/:num">
              <Music/>
            </Route>
            <Route>
              <EmptyPage/>
            </Route>           
          </Switch>          
        </div>
    </BrowserRouter>      
  );
}

export default App;