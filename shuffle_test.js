var expect = chai.expect;

describe('Shuffle Function', function() {
    describe('#shuffle', function() {
        it('Function should take elements in array and randomly shuffle them', function() {
            var x = shuffle([1,2,3,4,5]);
            expect(x.length).to.equal(5);
        });

        // it('It should throw an error if the order of the elements have not changed', function() {
        //     expect(function() {
        //         shuffle([1,2,3,4,5]);
        //     }).to.throw(Error);
        // });
    });
});
    
      