//this. Задачи

//1


const rectangle = {
    width: 12,
    height: 10,
    getSquare: function () {
        return this.width * this.height;
    }
};

console.log(rectangle.getSquare());

//2
const price = {
    price: 10,
    discount: '15%',
    getPrice: priceReturn,
    getPriceWithDiscount: priceDiscounted
};

function priceReturn() {
    return this.price;
}

function priceDiscounted() {
    let index = parseFloat(this.discount) / 100;

    return this.price - this.price * index;
}

console.log(price.getPrice());
console.log(price.getPriceWithDiscount());

//3

const user = {
    name: 'Abraham',
    getName: function () {
        return this.name
    }
};

console.log(user.getName());


//4

const object = {
    height: 10,
    increaseHeight: getIncreased
};


function getIncreased() {
    //return this.height + 1;
    return this.height += 1;
}

console.log(object.height);
console.log(object.increaseHeight());
console.log(object.height);

//5

const numerator = {
    value: 1,
    double: function () {
        this.value *= 2;
        return this;
    },
    plusOne: function () {
        this.value += 1;
        return this
    },
    minusOne: function () {
        this.value -= 1;
        return this
    }
};


console.log(numerator.double().plusOne().plusOne().minusOne());
console.log(numerator.value);

//6
const userX = {
        name: 'Abraham',
    },
    otherUser = {
        name: 'Jhon',
        getName: function () {
            return this.name
        }
    };

userX.getName;// У объекта userX нет свойства getName;
userX.getName = otherUser.getName();// объект user "отдалживает" метод у объекта otherUser;

userX.getName();//у объекта userX есть метод getName, т.к. он его одолжил
otherUser.getName();//у объекта otherUser есть метод getName

//this.Задачи. Part 2

//1
function getList() {
    return this.list;
}

let users = {
    length: 4,
    list: ['Abraham', 'James', 'Jhon', 'Steven']
};

console.log(getList()); // undefined, так как не передано контекста;
users.getList = getList; //объекту users добавлен метод getList;
console.log(users);
console.log(users.getList());//вернет users.list, так как этому объекту добавили выше метод getList;
console.log(getList.call(users)); //вернет  users.list, так как сall  передаст контекст объекта users;


//2,3

const products = {
    price: 14,
    quantity: 50,
    getTotal: function () {
        return this.price * this.quantity;
    }
};

const details = {
    price: 5,
    quantity: 24,
};

details.getTotal = products.getTotal();
console.log(details.getTotal);

//4
let sizes = {
    width: 5,
    height: 10
};

getSquare = function () {
    return this.width * this.height
};

//console.log(getSquare.call(sizes));

//5
let numbers = [4, 12, 0, 10, -2, 4];

console.log(Math.min.apply(null, numbers));

//6
const element = {
    height: '15px',
    marginTop: '5px',
    marginBottom: '5px',
    getFullHeight: function () {
        return parseFloat(this.height) + parseFloat(this.marginTop) + parseFloat(this.marginBottom);
    }
};

const block = {
    height: '5px',
    marginTop: '3px',
    marginBottom: '3px',
};

console.log(element.getFullHeight());

let blockHeight = element.getFullHeight.call(block);
console.log(blockHeight);

//7

let element7 = {
    height: 25,
    getHeight: function () {
        return this.height
    }
};

let getElementHeight = element7.getHeight.bind(element7);
console.log(getElementHeight());