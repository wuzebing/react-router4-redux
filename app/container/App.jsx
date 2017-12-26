import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom'

import Header from "../pages/Header"
import LeftMenu from "../pages/LeftMenu"
import MainContent from "../pages/MainContent"
/*
 * @class App `APP`组件
 */
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }
    render() {
        return (
            <div>
                <Header></Header>
                <BrowserRouter>
                    <div>
                        <LeftMenu />
                        <MainContent />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
