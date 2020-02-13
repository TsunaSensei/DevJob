import './App.scss';
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Route} from "react-router";
import Loading from "./components/Loading";
import Home from "./components/Home";
import PageJobs from "./components/PageJobs";
import PageAddJob from "./components/PageAddJob";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      skills: [],
      loading: true
    }
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/jobs')
        .then(response => response.json())
        .then(data => this.setState({jobs: data["hydra:member"], loading: false }))

    fetch('http://127.0.0.1:8000/api/skills')
        .then(response => response.json())
        .then(data => this.setState({skills: data["hydra:member"], loading: false }))
  }

  render() {
      if (this.state.loading){
          return <Loading/>;
      }

    return (
        <div>
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="navbar-brand">
                <ul className="navbar-nav">
                    <li className="nav-link"><NavLink to="/">Accueil</NavLink></li>
                    <li className="nav-link"><NavLink to="/offres">Offres d'emploi</NavLink></li>
                    <li className="nav-link"><NavLink to="/ajouter-offre">Ajouter une offre</NavLink></li>
                </ul>
            </div>
          </nav>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/offres">
            <PageJobs jobs={this.state.jobs}/>
        </Route>
        <Route path="/ajouter-offre">
            <PageAddJob skills={this.state.skills}/>
        </Route>
        </div>
    );
  }
}

export default App;