import React, { Component } from 'react'
import Read from '../../until/request'
class Deng extends Component {
    state={
        use:"",
        pwd:""
    }
    use=()=>{
        console.log(this.refs.use.value)
        this.setState({
            use:this.refs.use.value
        })
    }
    pwd=()=>{
        console.log(this.refs.pwd.value)
        this.setState({
            pwd:this.refs.pwd.value
        })
    }
    deng=()=>{
        const {use,pwd}=this.state
        Read('/mock/json',{use,pwd}).then(res=>{
            console.log(res)
            if(res==='成功'){
                this.props.history.push('/route/yi')
            }
        })
    }
    render() {
        return <div>
           <p> 用户名:<input ref="use" type="text" onChange={this.use}></input></p>
            密码:<input ref="pwd" type="text" onChange={this.pwd}></input>
            <button onClick={this.deng}>登录</button>
        </div>

    }
}
export default Deng