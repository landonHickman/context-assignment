import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Container } from 'semantic-ui-react';
import UserProfile from './components/UserProfile';
import AddUser from './components/AddUser';
import VillainProfile from './components/VillainProfile';

function App() {
  return (
    <>
    <Navbar/>
    <Container>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/users/new' component={AddUser}/>
        <Route exact path='/users/profile' component={UserProfile}/>
        <Route exact path='/villains/profile' component={VillainProfile}/>
      </Switch>
    </Container>
    </>
  );
}

export default App;
