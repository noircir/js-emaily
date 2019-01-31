import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>New Survey</h2>

class App extends React.Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path='/' exact component={Landing} />
                        <Route path='/surveys' exact component={Dashboard} />
                        <Route path='/surveys/new' exact component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);