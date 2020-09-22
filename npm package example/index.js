const is = require("simple-is");

//require ile herhangi bir paket ismi verdiğimizde node modulesde aranıyor dahil ediliyor
console.log("is.number(24) :>> ", is.number(24));
console.log("is.number(24) :>> ", is.string(24));

var objectExample = {
    name: "sere",
    age: 25,
};

console.log("is.object(objectExample) :>> ", is.object(objectExample));