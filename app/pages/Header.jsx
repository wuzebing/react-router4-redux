import React, { Component } from 'react';
/*
 * @class 头部组件
 */
class Header extends Component {
    constructor(props){
      super(props);
      this.state = {
        logo: '统一发布管理平台'
      }
    } 

    render() {
        return (
            	<div style={headerStyle}>
            		<h2>{this.state.logo}</h2>
             </div>
        );
    }
}
export default Header;

let headerStyle = {
  borderBottom:"1px solid #ccc"
}