var givenString = "CGCCGDKSKDGCCGCCGDKDGCCGDS"
var length = givenString.length;

// let givenStringIndex = givenString.indexOf('GCCG');

// alert(givenString.length)

// let moddedGivenString = givenString.substr(givenStringIndex, givenStringIndex + 3);

// alert(moddedGivenString);

for (var cnt = 0; cnt < length; cnt++)
{
    console.log(givenString.indexOf("GCCG", cnt));
    if (cnt == -1)
    {
        cnt++;
    }

    else
    {
        cnt = givenString.indexOf("GCCG", cnt) + 1;
    }
}