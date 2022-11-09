const foo = Math.PI * Math.SQRT2;

function cube (x)
{
    return Math.pow(x, 3);
}

var exportSomething =
{
    datas :
    {
        name : "Test", 
        desc : "IDK What is this"
    },
    print : function()
    {
        console.log("Print Something.");
    }


}

export {foo, cube, exportSomething}