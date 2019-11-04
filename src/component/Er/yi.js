import React,{ Component } from 'react'; 
class Yi extends Component{
    dian=(item)=>{
        this.props.history.push(`/xiang/${item.title}`)
    }
    render(){ 
          console.log(this)
        const {xianglist} = this.props
        return <div>
           Yi

           {
       
              xianglist.map((item,index)=>{
                   return <div onClick={()=>{this.dian(item)}}>
                       {item.title}
                   </div>
               })
           }
        </div>
    }
}
export default Yi
