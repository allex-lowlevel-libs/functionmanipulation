var expect = require('chai').expect,
  Checks = require('allex_checkslowlevellib'),
  Inherit = require('allex_inheritlowlevellib')(Checks.isFunction,Checks.isString).inherit,
  lib = require('..')(Inherit);

describe('Testing \'Function manipulation\' lib', function(){
  it('Basic tests', function(){
    var B,b;
    function A(){
      this.displayName = 'A';
      this.nesto = 'nesto';
    }
    A.displayName = 'ime A';
    A.prototype.destroy = function(){
      this.nesto = null;
      this.displayName = null;
    }
    B = lib.functionCopy(A);
    expect(B.displayName).to.be.equal('ime A');
    b = new B();
    expect(b.displayName).to.be.equal('A');
    expect(b.nesto).to.be.equal('nesto');
    b.destroy();
    expect(b.displayName).to.be.null;
    expect(b.nesto).to.be.null;
  });
});
