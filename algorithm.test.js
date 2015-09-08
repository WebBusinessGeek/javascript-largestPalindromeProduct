describe("Algorithm", function() {
    it("should work", function() {
        expect(true).toBe(true);
    });
    it("should return true integer is a palindrome", function() {
        result = isAPalindrome(1234321);
        expect(result).toBe(true);
    });
    it("should return false if integer is not a palindrome", function() {
        result = isAPalindrome(4455);
        expect(result).toBe(false);
    });
    it("should return all palindromes possible between the specified range", function() {
        result = findAllPalindromes(1, 11);
        good = [121,99,88,77,66,55,44,33,22,11];
        expect(result).toEqual(good);
    });
    it("should return the largest integer in an integer array", function() {
        result = findLargestIntegerInArray([121,99,88,77,66,55,44,33,22,11]);
        expect(result).toBe(121);
    });
    it("should return the largest palindrome using integers between specified limits ", function() {
        result = findLargestPalindrome(100, 999);
        expect(result).toBe(906609);
    })
});