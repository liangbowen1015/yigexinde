import React, { Component } from 'react';
import './cup.css'
import Request from '../../until/request'
import Top from './top'
// import '../../static/'
class Cup extends Component {
    state = {
        imglist: [],
        pushlist: []
    }
    addtop = (item) => {
        const { pushlist } = this.state
        if (item.checked) {
            alert('不能添加')
        } else {
            if (pushlist.length > 3) {
                alert('最多只能添加三个')
            } else {
                item.checked = true
                pushlist.push(item)
                this.setState({
                    pushlist
                })
            }
        }
    }
    render() {
        const { imglist, pushlist } = this.state
        return <div>
            <Top pushlist={pushlist} />
            <div className="cupdabox">
                {
                    imglist.map((item, index) => {
                        return <div key={index} className='cupbox'>
                            <img onClick={() => { this.addtop(item) }} src={require('../../static/' + item.src)} alt="" />
                        </div>
                    })
                }
            </div>
        </div>
    }
    componentDidMount() {
        Request('/data/json').then(data => {
            // console.log(data)
            this.setState({
                imglist: data
            })
        })
    }

}
export default Cup