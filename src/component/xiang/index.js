import React,{Component} from 'react'
class Xiang extends Component{
    state={
        toplist:[
            {title:'这是一条新闻',path:'/detail',id:'1'},
            {title:'这是二条新闻',path:'/er',id:'2'},
            {title:'这是三条新闻',path:'/san',id:'3'},
        ]
    }
    dian=(item)=>{
        
    }
    render(){
        console.log(this)
        const {toplist}=this.state
        return <div>
            {
                toplist.map((item,index)=>{
                    return <div onClick={()=>{this.dian(item)}} style={{background:"pink",marginTop:"20px"}} key={index}>{item.title}</div>
                })
            }
        </div>
    }

}
export default Xiang