import './App.css';
import {Link, NavLink, Route, Switch} from 'react-router-dom';
import Main from "./components/Main";
import Quiz from "./components/Quiz";
import FrameworkInfo from "./components/FrameworkInfo";
import React from "react";
import InfoReact from "./components/InfoReact";
import Additional from "./components/Additional";
import ProjectType from "./components/ProjectType";
import InfoAngular from "./components/InfoAngular";
import InfoVue from "./components/InfoVue";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <Link to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none d-sm-inline">Выбор фронтэнд-фреймворка</span>
              </Link>
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start mt-3" id="menu">
                <li className={'mb-3'}>
                  <NavLink to={'/quiz'} className="ms-1 d-none d-sm-inline">Выбор по опросу</NavLink>
                </li>
                <li className={'mb-3'}>
                  <NavLink to={'/project_type'} className="ms-1 d-none d-sm-inline">Выбор по типу проекта</NavLink>
                </li>
                <li>
                  <span className="ms-1 d-none d-sm-inline">Фреймворки</span>
                  <ul className="flex-column">
                    <li className="">
                      <Link to='/react' className="nav-link px-0 text-left"> <span className="d-none d-sm-inline">React</span></Link>
                    </li>
                    <li>
                      <Link to='/vue' className="nav-link px-0"> <span className="d-none d-sm-inline">Vue</span></Link>
                    </li>
                    <li>
                      <Link to='/angular' className="nav-link px-0"> <span className="d-none d-sm-inline">Angular</span></Link>
                    </li>
                  </ul>
                </li>
                <li className={'mb-3'}>
                  <NavLink to={'/additional'} className="d-none d-sm-inline">Дополнительные материалы</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col py-3" style={{maxHeight: '100vh', overflowY:'auto'}}>
            <Switch>
              <Route path='/' exact component={Main}/>
              <Route path='/quiz' component={Quiz}/>
              <Route path='/quiz' component={FrameworkInfo}/>
              <Route path='/react' component={InfoReact}/>
              <Route path='/angular' component={InfoAngular}/>
              <Route path='/vue' component={InfoVue}/>
              <Route path='/additional' component={Additional}/>
              <Route path='/project_type' component={ProjectType}/>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
