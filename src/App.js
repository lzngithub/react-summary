import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { ReducerProvider } from '@/hooks/reducerContext'
import './App.less';
import {Navigate} from '@/pages/navigate'
import {Home} from '@/pages/home'

function App() {
  return (
    <ReducerProvider>
      <Router>
        <Switch>
          <Route exact={true} path='/' component={Navigate}></Route>
          <Route path='*' component={Home}></Route>
        </Switch>
      </Router>
    </ReducerProvider>
    
  );
}

export default App;
