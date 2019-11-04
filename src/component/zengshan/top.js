import React,{Component} from 'react'
import './cup.css'
class Top extends Component{
    state={

    }
    shan=(item,index)=>{
        const newarr = this.props.pushlist
        
        newarr.splice(index,1)
        item.checked=false
        this.setState({
            newarr
        })
    }
    render(){
        console.log(this)
        // const {toplist}=this.props.pushlist
        // console.log(toplist)
        return <div className="topxuan">
                {/* <div>
                    <button className='btntop'>COMPONENT</button>
                </div> */}
                {
                    this.props.pushlist.map((item,index)=>{
                        return <div key={index} className="addtu">
                            <img onClick={()=>{this.shan(item,index)}} src={require('../../static/'+item.src)} alt=""/>
                        </div>
                    })
                }
                
        </div>
    }
}
export default Top