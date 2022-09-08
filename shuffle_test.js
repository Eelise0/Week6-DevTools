var expect = chai.expect;

describe('war game', function() {
    describe('#shuffle', function() {
        it('Length of array should equal 5', function() {
            var x = shuffle([1,2,3,4,5]);
            expect(x.length).to.equal(5);
        });
    });

    describe('player class', function() {
        it('has a name', function() {
            const player = new Player('Cool Name');
            expect(player.name).to.equal('Cool Name');
        })
    })
});
    
      