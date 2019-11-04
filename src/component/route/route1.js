import React, { Component } from 'react'
import {Link,Switch,Route} from 'react-router-dom'
import Yi from '../../component/Er/yi'
import Er from '../../component/Er/er'
import San from '../../component/Er/san'
import Si from '../../component/Er/si'
class Routes extends Component{
    state={
        toplist:[
            {title:'第一',path:'/route/yi',component:Yi},
            {title:'第二',path:'/route/er',component:Er},
            {title:'第三',path:'/route/san',component:San},
            {title:'第四',path:'/route/si',component:Si},
        ],
        xianglist:[
            {title:'这是一条新闻',path:'/detail',id:'1'},
            {title:'这是二条新闻',path:'/er',id:'2'},
            {title:'这是三条新闻',path:'/san',id:'3'},
        ]
    }
    render(){
        const {toplist}=this.state
        return <div>
           <div className="left">
           {
                toplist.map((item,index)=>{
                    return <Link key={index} to={item.path}>{item.title}</Link>
                })
            }
           </div>
           <div className="right">
               <button><Link to="/deng">登录</Link></button>
           </div>
            <Switch>
                {
                    toplist.map((item,index)=>{
                        return <Route path={item.path} render={(props)=>{
                            return <item.component {...props} {...this.state} />
                        }}></Route>
                    })
                }
            </Switch>
        </div>
    }
} 
export default Routes