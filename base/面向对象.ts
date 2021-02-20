// 类
class Person {
    public name;
    public age;
    protected height; // 只能自己及其子类可以访问
    constructor(name, age, height) { // 接受的参数
        this.name = name
        this.age = age
        this.height = height
    }

    eat() {
        // Person的eat方法
    }

    speak() {
        // Person的speak方法
    }
}

// 对象 (实例)
let zhang = new Person('zhang', 20, 184)
zhang.eat()
zhang.speak()

let wang = new Person('wang', 21, 176)
wang.eat()
wang.speak()

/**
 * 继承
 */
// 子类继承父类
 class Student extends Person {
     public number; // 所有成员都可以访问
     private girlFriend; // 只有Student子类的内部方法可以进行访问
     constructor(name, age, height , number){
         super(name, age, height) // 将name age的传递给父类来执行
         this.number = number // 子类独有的属性
         this.girlFriend = 'YangTian'
     }

     study () {
         // 子类独有的方法
         console.log(this.girlFriend, this.height); // 可以访问自己私有的属性，也可以访问父类中受到保护的属性
     }
 }

 let xiaoming = new Student('xiaoming', 23, 156 , 'A1')
 xiaoming.study() // 子类实例化的对象调用自己的方法
 xiaoming.speak() // 子类实例化的对象调用父类的方法
 xiaoming.eat() // 子类实例化的对象调用父类的方法
 console.log(xiaoming.height); // 受到保护的属性无法通过子类的实例进行访问
 /**
  * 封装
  * public 完全开放 默认
  * protected 对子类开放
  * private 对自己开放
  * 以上三个关键字es6并不支持，需要配合typescript来使用
  * 封装的好处：
  * 减少耦合
  * 接口权限管理
  */

 /**
  * 多态
  * 保证了子类的开放性以及灵活性
  * 面向接口编程
  */
 class a {
     public name;
     constructor(name) {
         this.name = name
     }
     sayName() {
         console.log(`my name is ${this.name}`);
     }
 }
  class A extends a {
      constructor(name){
          super(name)
      }

      sayName() {
          // 重写了父类的sayName, 实现更加灵活多变的功能
      }
  }