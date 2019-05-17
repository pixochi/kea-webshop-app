const expect = require('chai').expect;

describe('Example test suite', () => {
      it('should return true', () => {
            const t = true;
            expect(t).to.be.true;
      });
      
      it('should return false', () => {
            const f = false;
            expect(f).to.be.false;
      });
});
