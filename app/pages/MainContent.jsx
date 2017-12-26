import React, { Component } from 'react';
import {Route ,Link } from 'react-router-dom'

import PageOne from './PageOne'
import PageTwo from './PageTwo'
import Example from './Example'
/*
 * @class `右侧内容`
 */
class MainContent extends Component {
    constructor(props){
      super(props);
      this.state = {
        
      }
    } 

    render() {
        return (
            	<div style={MainContentStyle}>
                  <Route exact path="/" component={PageOne}/>
                  <Route path="/pageone" component={PageOne}/>
                  <Route path="/pagetwo" component={PageTwo}/>
                  <Route path="/example" component={Example}/>
              </div>
        );
    }
}
export default MainContent;

let MainContentStyle = {
  backgroundColor:"#eee",
  height:"200px",
  overflow:"hidden"
}