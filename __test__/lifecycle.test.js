describe("unit test life cycle with Jest",function() {
    beforeAll(function(){console.log("Before All");});
    afterAll(function(){console.log("After All");});
    beforeEach(function(){console.log("Before Each");});
    afterEach(function(){console.log("After Each");});
    it('Run Test1',function(){
       console.log("Test Cases01");
        expect(true).toBe(true);
    });

    it('Run Test2',function(){
       console.log("Test Cases02");
        expect(true).toBe(true);
    });
}) 