module.exports = function check(str, bracketsConfig) {
    // your solution
    if (str.length % 2 != 0) {
        return false;
    }
    var SolArr = [];
    var SkobArr = str.slice('');
    var i = 0;
    while (i < SkobArr.length) {
        for (var j = 0; j < bracketsConfig.length; j++) {
            if ((SolArr[SolArr.length - 1] === bracketsConfig[j][0]) &&
                (SkobArr[i] === bracketsConfig[j][1])) {
                SolArr.pop();
            } else if (SkobArr[i] === bracketsConfig[j][0]) {
                SolArr.push(SkobArr[i]);
            }
        }
        i++;
    }
    if (SolArr.length === 0) {
        return true;
    } else {
        return false;
    }
}
