import React,{ Component } from 'react'; 
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Home from './tiao/home'
import Detail from './tiao/detail'
class Routers extends Component{
    state={

    }
    render(){
        return <div>
            <BrowserRouter>
            <Link to="/home">home11</Link>
            <Link to="/detail">deatail</Link>
            <Route path="/home" component={Home}/>
            <Route path="/detail" component={Detail}/>
            </BrowserRouter>
        </div>
    }
}
export default Routers