import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Container } from 'semantic-ui-react';
import UserProfile from './components/UserProfile';
import AddUser from './components/AddUser';
import VillainProfile from './components/VillainProfile';
import { Background } from './styles';

function App() {
  return (
    <Background>
    <Navbar/>
    <Container style={{marginTop: '25px'}}>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/users/new' component={AddUser}/>
        <Route exact path='/users/profile' component={UserProfile}/>
        <Route exact path='/villains/profile' component={VillainProfile}/>
      </Switch>
    </Container>
    </Background>
  );
}



export default App;
