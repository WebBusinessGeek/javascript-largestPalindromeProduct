function isAPalindrome(integerValue) {
    var convertToString = integerValue.toString();
    var splitString = convertToString.split("");
    var reverse = splitString.reverse();
    var backToString = reverse.join('');
    if(backToString == integerValue) {
        return true;
    }
    return false;
}