// Testing vectors // 
var FIXTURE = vector.create(10, 20);

describe('Vector', function (){
    
    beforeEach(function () {
      console.log('before');
    });

    describe('getX', function () {
      it('Should get 10', function () {
        expect(FIXTURE.getX()).toEql(10);
      });
    });

    describe('getY', function () {
      it('Should get 20', function () {
        expect(FIXTURE.getY()).toEql(20);
      });
    });

    describe('setX', function () {
      it('Should set the state to 0', function () {
        FIXTURE.setX(0)
        expect(FIXTURE.getX(0)).toEql(0)
      });
    });

    describe('setY', function () {
      it('Should set the state to 0', function () {
        FIXTURE.setY(1)
        expect(FIXTURE.getY()).toEql(1)
      });
    })

})



