import React,{ Component } from 'react'; 
class One extends Component{
    render(){
        console.log(this)
        return <div>
           {
               this.props.match.params.newidx
           }
        </div>
    }
}
export default One
