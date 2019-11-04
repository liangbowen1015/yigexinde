import React, { Component } from 'react'
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom'
import Routes from '../component/route/route1'
import Deng from '../component/deng/index'
import Xiangqing from '../component/xiangqingzujian/index'
class Rout extends Component{
    render(){
        return<div>
            <BrowserRouter>
                <Switch>
                    <Route path="/route" component={Routes}></Route>
                    <Route path="/deng" component={Deng}></Route>
                    <Route path="/xiang/:newidx" component={Xiangqing}></Route>
                    <Redirect from="/" to="/route"></Redirect>
                </Switch>
            </BrowserRouter>
        </div>
        
        
    }
}
export default Rout