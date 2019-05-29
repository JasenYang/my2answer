module.exports = function main(number) {
    console.log("Debug Info")
    var array = number.split('')
    var t1 = ["._.", "...", "._.", "._.", "...", "._.", "._.", "._.", "._.", "._."]
    var t2 = ["|.|", "..|", "._|", "._|", "|_|", "|_.", "|_.", "..|", "|_|", "|_|"]
    var t3 = ["|_|", "..|", "|_.", "._|", "..|", "._|", "|_|", "..|", "|_|", "..|"]
    var l = array.length
    var res = new Array()
    for (var i = 0; i < 3; i++) {
      res[i] = new Array()
    }
    for (var i = 0; i < l; i++) {
      var n = array[i]
      res[0][i] = t1[n]
      res[1][i] = t2[n]
      res[2][i] = t3[n]
    }
    
    return res[0].join(' ')+'\n'+res[1].join(' ')+'\n'+res[2].join(' ')+'\n';
};