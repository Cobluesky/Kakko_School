import {cube, foo, exportSomething} from "/export_module_test.js";

exportSomething.datas = {
    name : "Imported",
    desc : "need a descriptions?"
}

exportSomething.print();
console.log(cube(3));
console.log(foo);