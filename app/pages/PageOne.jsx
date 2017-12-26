import React, { Component } from 'react';
/*
 * @class 测试
 */
class PageOne extends Component {
    constructor(props){
      super(props);
      this.state = {
        about: 'page one'
      }
    } 

    render() {
        return (
            	<div>
            		<h2>{this.state.about}</h2>
             </div>
        );
    }
}
export default PageOne;
