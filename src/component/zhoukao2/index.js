import React from 'react';
import './style.css'
class Sun extends React.Component{
    state={
        hua:[
            {
                name:"海淀区",
                list:[
                    {
                        name:"途虎养车工厂店1",
                        feng:'总评分:4.99',
                        ding:'总订单:12131',
                        si:'施工现场直播',
                        add:'北京市西北旺福利'
                    },
                ]
            },
            {
                name:"全部门店",
                list:[
                    {
                        name:"途虎养车工厂店2",
                        feng:'总评分:4.99',
                        ding:'总订单:12131',
                        si:'施工现场直播',
                        add:'北京市西北旺福利'
                    },
                ]
            },
            {
                name:"默认淀区",
                list:[
                    {
                        name:"途虎养车工厂店3",
                        feng:'总评分:4.99',
                        ding:'总订单:12131',
                        si:'施工现场直播',
                        add:'北京市西北旺福利'
                    },
                ]
            },
            {
                name:"筛选",
                list:[
                    {
                        name:"途虎养车工厂店",
                        feng:'总评分:4.99',
                        ding:'总订单:12131',
                        si:'施工现场直播',
                        add:'北京市西北旺福利'
                    },
                ]
            }
        ],
        idx:0,
        arrlist:[]
    }
    btn=(item,index)=>{
        console.log(item,index)
        this.setState({
            idx:index,
            arrlist:item
        })
    }
   
    render(){
        const {hua,idx,arrlist}=this.state
        const newlist=arrlist.length===0?hua[0].list:arrlist
       return <div>
           <div className="head">
               头部
           </div>
           <div className="main">
               <div>
                    {
                   hua.map((item,index)=>{
                       return <div onClick={()=>{this.btn(item.list,index)}}  className={['float',idx===index?'active':''].join(' ')} key={index}>{item.name}</div>
                   })
               }
               </div>
               <div>
                   {
                    newlist.map((item,index)=>{
                        return <div key={index}>{item.name}</div>
                    })
                   }
               </div>
              
           </div>
       </div>
    }
}
export default Sun