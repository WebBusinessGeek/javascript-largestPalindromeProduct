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
        result = findGreatestPalindrome(10, 99);
        expect(result).toBe(9009);
    });
    it("should return the answer to the problem", function() {
        result = findGreatestPalindrome(100, 999);
        expect(result).toBe(580085);
    });
});