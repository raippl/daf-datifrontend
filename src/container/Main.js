import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../container/Login'
import Register from '../container/Register'

import { Footer } from '../components/HeaderFooter/Footer';
import { Header } from '../components/HeaderFooter/Header';

import Home from '../views/Home';
import UserStoryView from '../views/UserStoryView';
import DatasetSearch from '../views/DatasetSearch';
import DatasetDetail from '../views/DatasetDetail';

import {IntlProvider} from 'react-intl';
import it from "react-intl/locale-data/it";
import {addLocaleData} from 'react-intl';
addLocaleData(it);

const mapStateToProps = state => ({
  appName: state.appName
});

class Main extends React.Component {

  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <IntlProvider locale="it">
       <div data-reactroot className="app">   
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/user_story/:id' exact component={UserStoryView} />
            <Route path='/dataset/search' exact component={DatasetSearch} />
            <Route path='/dataset/:id' exact component={DatasetDetail} />

            <Route render={() => <h3>Pagina non trovata</h3>} />
          </Switch>
          <Footer />
        </div>
      </IntlProvider>
      );
  }
}

export default Main;
