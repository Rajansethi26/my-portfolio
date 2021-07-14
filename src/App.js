import React, { Component } from 'react';

import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from  './components/testimonials/testimonials';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import resumeData from './resumeData';
import dataScience from './dataScience';
import Demo from './components/datasciencedemo/demo';
import DemoWeb from './components/datasciencedemo/demoweb';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
    <div>
      <div className="abc">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Testimonials resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
        </div>
       {/* <div className ="bc">
            <Switch>
              <Route exact path='/demo' component={Demo} />
              <Route path='/webcam' component={DemoWeb} />
            </Switch>
        </div>*/}
    </div>
    );
  }
}

export default App;
