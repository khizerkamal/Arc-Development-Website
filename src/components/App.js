import Header from "./ui/Header";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/theme';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={()=><div>Home Page</div>} />
        <Route exact path="/services" component={()=><div>services</div>} />
        <Route exact path="/customsoftware" component={()=><div>customsoftware</div>} />
        <Route exact path="/mpbileapps" component={()=><div>mpbileapps</div>} />
        <Route exact path="/websites" component={()=><div>websites</div>} />
        <Route exact path="/revolution" component={()=><div>revolution</div>} />
        <Route exact path="/about" component={()=><div>about</div>} />
        <Route exact path="/contact" component={()=><div>contact</div>} />
        <Route exact path="/estimate" component={()=><div>estimate</div>} />
      </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
