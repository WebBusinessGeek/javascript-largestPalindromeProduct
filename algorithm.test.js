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
    it("should return greatest palindrome possible within limits specifiied", function() {
        result = findGreatestPalindrome(9, 99);
        expect(result).toBe(9009);
    });
});