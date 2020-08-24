function Person(arg) {
    this.name = arg;
    this.getName = function () {
        return this.name;
    };
    this.setName = function (name) {
        this.name = name;
    };
}
var milly = new Person('Milly');
console.log(milly.getName()); // Milly
milly.setName('Milly the cat');
console.log(milly.getName());
var sully = new Person('Sully');
console.log(sully.getName()); // Sully
// getName() in both instance of milly and sully has the same feature while wasting resources by initialized two times.
// so it is better to use prototype chaining like the follwing
function Person2(arg) {
    this.name = arg;
}
Person2.prototype.getName = function () {
    return this.name;
};
Person2.prototype.setName = function (val) {
    this.name = val;
};
var yeon = new Person2('Yeon');
var bibi = new Person2('Bibi');
console.log(yeon.getName()); // Yeon
console.log(bibi.getName()); // Bibi

// a method to add methods to prototype object
Function.prototype.addMethod = function (name, method) {
    if (! this.prototype[name]) {
        this.prototype[name] = method;
    }
};
function Cat(arg) {
    this.name = arg;
}
Cat.addMethod("setName", function (val) {
    this.name = val;
})
Cat.addMethod("getName", function () {
    return this.name;
})
var leo = new Cat("Leo");
console.log(leo.getName()); // Leo

// inherit by prototype
var person = {
    name: 'kdh',
    getName: function () {
        return this.name;
    },
    setName: function (arg) {
        this.name = arg;
    }
};
function _create(o) {
    function F() {};
    F.prototype = o;
    return new F();
}
var student = _create(person); // Java -> student extends person
student.setName('kim');
console.log(student.getName());

function _extend(obj, prop) {
    if (!prop) {
        prop = obj;
        obj = this;
    }
    for (var i in prop) {
        obj[i] = prop[i];
    }
    return obj;
}
var added = {
    setAge: function (age) {
        this.age = age;
    },
    getAge: function () {
        return this.age;
    }
};
_extend(student, added);
student.setAge(20);
console.log(student.getAge());

// inherit by class
function People(arg) {
    this.name = arg;
}
People.prototype.setName = function (arg) {
    this.name = arg;
}
People.prototype.getName = function () {
    return this.name;
}
function Citizen(arg) {
    People.apply(this, arguments);
}

function F() {};
F.prototype = People.prototype;
Citizen.prototype = new F();
Citizen.prototype.constructor = Citizen;
Citizen.super = People.prototype;

var me = new Citizen('me');
me.setName('whoiam');
console.log(me.getName()); // whoiam

// a function to set inherit 
var inherit = function (Parent, Child) {
    var F = function () {};
    return function (Parent, Child) {
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.super = Parent.prototype;
    };
}();

// Encapsulation
var Capsule = function (arg) {
    var name = arg ? arg : 'default name';
    this.getName = function () {
        return name;
    };
    this.setName = function (arg) {
        name = arg;
    };
};

var me = new Capsule();
me.setName('polkadot');
console.log(me.getName()); // polkadot
console.log(me.name); // undefined
me.name = 'kdh';
console.log(me.getName()); // polkadot

// module pattern
var Capsule2 = function (arg) {
    var name = arg ? arg : 'default';
    return {
        getName : function () {
            return name;
        },
        setName : function (arg) {
            name = arg;
        }
    };
};

// function return module pattern
var Capsule3 = function (arg) {
    var name = arg ? arg : 'default name';
    var F = function () {};
    F.prototype = {
        getName : function () {
            return name;
        },
        setName : function (arg) {
            name = arg;
        }
    };
    return F;
}();

var iam = new Capsule3();
console.log(iam.getName());
iam.setName('iam');
console.log(iam.getName());