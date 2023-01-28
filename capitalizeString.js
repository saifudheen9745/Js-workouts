let str = "my name is saifu, hai how are you?"


function stringCapitalize(str){
    let wordArray = str.split(" ")
    let string = wordArray.map(elem =>{
        var fLetter = elem.charAt(0).toUpperCase()
        var ltrArray = elem.split("")
        ltrArray[0] = fLetter
        return ltrArray.join("")
    })
    return string.join(" ") 
}

console.log(stringCapitalize(str));
