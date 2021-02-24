/**
 * 工厂模式: 将new操作单独封装，遇到new时考虑是否使用工厂模式
 * 将构造函数和创建者分离
 * 典型的应用场景: React.createElement
  */

class Product {
    constructor(name) {
        this.name = name
    }

    init() {
        console.log('工厂模式')
    }
}

class Creator {
    create(name) {
        return new Product(name)
    }
}

// 测试

const creator = new Creator()
let p = creator.create('p1')

p.init()


/**
 * 单例模式： 系统中唯一被使用，一个类只有一个实例
 * 经典应用场景：登录框、购物车、JQuery的$、vuex、redux
 */

class SingleObject {
    login() {
        console.log('单例模式')
    }
}

SingleObject.getInstance = (function () {
    let instance
    return function () {
        if (!instance) {
            instance = new SingleObject()
        }
        return instance
    }
})()

// 测试

let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
console.log(obj1 === obj2, '单例模式都是完全相等的')
let obj3 = new SingleObject()
console.log(obj1 === obj3, 'js无法完全实现单例模式')


// 模拟登录框

class LoginForm {
    constructor() {
        this.state = 'hide'
    }
    show() {
        if (this.state === 'show') {
            alert('已经显示')
            return
        }
        this.state = 'show'
        console.log('登录框已经显示')
    }
    hide() {
        if (this.state === 'hide') {
            alert('已经隐藏')
            return
        }
        this.state = 'hide'
        console.log('登录框已经隐藏')
    }
}

// 返回登录框单例
LoginForm.getInstance = (function () {
    let instance
    return function () {
        if (!instance) {
            instance = new LoginForm()
        }
        return instance
    }
})()

let login1 = LoginForm.getInstance()
login1.show()
let login2 = LoginForm.getInstance()
login1.show()

/**
 * 适配器模式： 封装旧接口
 */
