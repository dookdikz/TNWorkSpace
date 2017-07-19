var sum = require('../src/sum');

describe('sum',function() {
    it('should return 3 when sum 1 with 2',function(){
        var expectedValue = 3;
        var actual = sum(1,2);
        expect(actual).toBe(expectedValue);
    });
}) 
