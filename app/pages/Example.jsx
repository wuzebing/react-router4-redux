import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser,removeUser} from '../actions';

/*
 * @class 测试
 */
class Example extends Component {
	  constructor(props){
      super(props);
      this.state = {
        exampleName: 'example name'
      }
      this.addUserClick = this.addUserClick.bind(this);
      this.removeUserClick = this.removeUserClick.bind(this);
      this.changeExampleName = this.changeExampleName.bind(this);
    } 

    addUserClick(){
      this.props.addDoUser(this.state.exampleName);
    }
    removeUserClick(){
      this.props.removeDoUser(0);
    }
    changeExampleName(e){
      let value = e.target.value;
      this.setState({exampleName:value});
    }
    render() {
        const { userList,addDoUser,removeDoUser} = this.props;
        return (
            	<div>
              		<h2>{this.state.exampleName}</h2>
                  <table>
                  <tbody>
                    {this.props.userList.map((user,index)=>{
                      return <tr key={index}><td>{index}</td><td>{user.name}</td><td>{user.value}</td></tr>
                    })}
                    </tbody>
                  </table>
                  <input type="text" value={this.state.exampleName} onChange={this.changeExampleName}/>
                  <button  onClick={this.addUserClick}>添加</button>
                  <button  onClick={this.removeUserClick}>删除</button>
              </div>
        );
    }
}
Example.propTypes = {
   
};

const mapStateToProps = (state) => {
    return { userList: state.userList };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addDoUser: (text) => {
            dispatch(addUser(text));
        },
        removeDoUser:(index) => {
            dispatch(removeUser(index));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Example);
