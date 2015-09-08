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

function findGreatestPalindrome(floor, ceiling) {
    var primaryCounter = ceiling;
    var secondaryCounter = ceiling;
    
    while(!isAPalindrome(primaryCounter * secondaryCounter)) {
        secondaryCounter--;
        if(secondaryCounter == floor - 1) {
            secondaryCounter = ceiling - 1;
            primaryCounter--;
        }
    }
    return primaryCounter * secondaryCounter;   
    
}

function findAllPalindromes(floor, ceiling) {
    var primaryCounter = ceiling;
    var secondaryCounter = ceiling;
    var palindromes = [];
    
    var product = primaryCounter * secondaryCounter;
    
    while(primaryCounter != floor) {
        if(isAPalindrome(product) && product > 9) {
            palindromes.push(product);
        }
        secondaryCounter--;
        if(secondaryCounter == floor - 1) {
            secondaryCounter = ceiling - 1;
            primaryCounter--;
        }
        product = primaryCounter * secondaryCounter;
    }
    return palindromes;
    
}


function findLargestIntegerInArray(array) {
    largest = 0;
    for(var i = 0; i < array.length; i++) {
        if(array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}

function findLargestPalindrome(floor, ceiliing) {
    var allPalindromes = findAllPalindromes(floor, ceiliing);
    return findLargestIntegerInArray(allPalindromes);  
}
