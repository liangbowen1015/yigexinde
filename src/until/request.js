import mock from '../mock/mock'

import mock from '../mock/mock'

function Request(url) {
    return new Promise(res => {
        res(mock[url]())
    })
}
export default Request


function Name(params, obj) {
    return new Promise(res => {
        res(mock[params](obj))
    })
}
export default Name