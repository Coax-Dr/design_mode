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
 * 单例模式：一个对象只允许创建一个实例，那么这个类就是单例类，这种设计模式叫做单例设计模式，简称为单例模式
 * 经典应用场景：登录框、购物车、JQuery的$、vuex、redux
 * 优点：
 * 划分独立的命名空间，避免全局变量污染
 * 代码逻辑集中，业务高低内聚
 * 只创建一个实例，减少对象频繁创建、销毁的消耗
 * 缺点：
 * 对oop特性的支持不好，单例模式内部自己创建实例，外部无法通过new来实例化，无法继承扩展
 * 对代码可测试性不友好
 */

 // 使用静态方法实现
class singleLoading {
    show () {
        //...
    }
    static getInstance() {
        if(!singleLoading.instance) {
            singleLoading.instance = new singleLoading()
        }
        return singleLoading.instance
    }
}

const loading1 = singleLoading.getInstance()
const loading2 = singleLoading.getInstance()
console.log('单例只会创建一次', loading1 === loading2)

 // 使用闭包实现
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
