import React from 'react';
import { Container } from 'react-bootstrap';
// Mis Componentes
import Menu from './components/Menu';
import Modal from './components/Modal';
import FormAddTweet from './components/FormAddTweet';
import TweetList from './components/TweetList';

//Redux
import store from './store';
import { Provider } from "react-redux";

export default function App() {

  return (
    <Provider store={store}>
      <Menu />
      <Container className="mt-5">
        <h1 className="text-center">TWEETS</h1>
        <TweetList />
      </Container>
      <Modal>
        <FormAddTweet />
      </Modal>
    </Provider>
    
  );
}


