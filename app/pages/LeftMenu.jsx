import React, { Component } from 'react';
import {Link } from 'react-router-dom'
/*
 * @class 左侧菜单
 */
class LeftMenu extends Component {
    constructor(props){
      super(props);
      this.state = {
        menuList: [
          {name:"菜单一",id:1,url:"/pageone"},
          {name:"菜单二",id:2,url:"/pagetwo"},
          {name:"例子",id:3,url:"/example"}
        ]
      }
    } 

    render() {
        return (
            	<div style={leftMenuStyle}>
                 <ul>
                    {
                      this.state.menuList.map((obj,index)=>{
                        return <li key={index}><Link to={obj.url}>{obj.name}</Link></li>
                      })
                    }
                  </ul>
              </div>
        );
    }
}
export default LeftMenu;

let leftMenuStyle = {
  borderRight:"1px solid #ccc",
  width:"100px",
  float:"left"
}