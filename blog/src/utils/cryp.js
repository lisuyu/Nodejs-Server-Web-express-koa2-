const crypto = require('crypto')

// 密匙
const SECRET_KEY = '@#SUNsih)Ua(a>?'

// md5加密
function md5(content) {
    const md5 = crypto.createHash('md5')
    // digest('hex') 将输出设置为16进制
    return md5.update(content).digest('hex')
}

function genPassword(password) {
    let str = `password=${password};<>${SECRET_KEY}`
    // let str = `password=${password}&keys=${SECRET_KEY}`

    return md5(str)
}

// console.log(genPassword('123'))
module.exports = {
    genPassword
}