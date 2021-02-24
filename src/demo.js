// 摄像头
class Camera {
    shot(car) {
        return {
            num: car.num,
            inTime: Date.now()
        }
    }
}

// 屏幕
class Screen {
    show(car, inTime) {
        console.log('停车时间', Date.now() - inTime);
    }
}

// 停车场
class Park {
    constructor(floor) {
        this.floor = floor || []
        this.camera = new Camera()
        this.screen = new Screen()
        this.carList = {}
    }
    in(car) {
        // 车辆驶入显示信息
        const info = this.camera.shot(car)
        // 停到某个停车位
        const i = parseInt(Math.random() * 100 % 100)
        const place = this.floor[0].places[i]
        place.in() // 进入停车位
        info.place = place

        // 记录信息
        this.carList[car.num] = info
    }
    out(car) {
        // 
        const info = this.carList[car.num]
        const place = info.place
        place.out()
        this.screen.show(car, info.inTime)
        delete this.carList[car.num]
    }
    emptyNum() {
        return this.floor.map(floor => {
            return `${floor.index} 层: ${floor.emptyPlacceNum()}`
        }).join('\n')
    }
}

// 车辆

class Car {
    constructor(num) {
        this.num = num
    }
}

// 层

class Floor {
    constructor(index, places) {
        this.index = index
        this.places = places || []
    }
    emptyPlacceNum() {
        let num = 0
        // 计算每层的空停车位
        num = this.places.filter(p => p.empty === true).length
        return num
    }
}

// 车位

class Place {
    constructor() {
        this.empty = true
    }
    in() {
        this.empty = false
    }
    out() {
        this.empty = true
    }
}

// 测试

const floors = []
for (let i = 0; i < 3; i ++) {
    const places = []
    for (let j = 0; j < 100; j ++) {
        places[j] = new Place()
    }
    floors[i] = new Floor(i + 1, places)
}

const park = new Park(floors)
const car1 = new Car(100)
const car2 = new Car(200)

console.log('第一辆车进入')
console.log(park.emptyNum())
park.in(car1)
console.log('第二辆车进入')
console.log(park.emptyNum())
console.log('第一辆车离开')
park.out(car1)
console.log(park.emptyNum())