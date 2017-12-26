import React, { Component } from 'react';
/*
 * @class 测试
 */
class PageTwo extends Component {
	constructor(props){
      super(props);
      this.state = {
        nomatch: 'page two'
      }
    } 
    render() {
        return (
              	<div>
              		<h2>{this.state.nomatch}</h2>
               </div>
        );
    }
}
export default PageTwo;
