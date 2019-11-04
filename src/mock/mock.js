import data from './data.json'
import shu from './mock.json'
let mock = {
    './data/json': function() {
        return data
    },
    '/mock/json': function(obj) {
        // return data
        console.log(obj)
        const result = shu.some(item => {
            return item.use === obj.use && item.pwd === obj.pwd
        })
        if (result) {
            return '成功'
        } else {
            return '失败'
        }

    }
}
export default mock