import {expect} from 'chai';
import GellyFactory from '../src/gelly';
import Gelly from '../src/library';
import _ from 'lodash';

describe('Gelly', function () {
  describe('define', function () {
    let gelly;
    beforeEach(function () {
      gelly = Gelly.define('test');
    });
    it('should return a GellyFactory object with name set and empty attributes', function () {
      expect(gelly.name).to.be.equal('test');
    });

    it('should set a reference in definedFactories', function () {
      expect(Gelly.definedFactories.test.default).to.equal(gelly);
    });
  });

  describe('defineTrait', function () {
    it('should throw an error if the trait isn\'t defined', function () {
      expect(() => {Gelly.defineTrait('check', 'testTrait');}).to.throw(Error);
    });

    it('should return a GellyFactory object simmilar to the deafult factory', function () {
      let gellyDefault = Gelly.define('test');
      let gelly = Gelly.defineTrait('test', 'testTrait');
      expect(_.isEqual(gelly, gellyDefault)).to.be.true;
      // Not the same reference it's a perfect deepCopy of that object
      expect(gelly).to.not.equal(gellyDefault);
    });

    it('should set a reference in definedFactories', function () {
      let gellyDefault = Gelly.define('test');
      let gelly = Gelly.defineTrait('test', 'testTrait');
      expect(Gelly.definedFactories.test.testTrait).to.equal(gelly);
    });
  });
});

describe('GellyFactory', function () {
  let gelly;
  beforeEach(function () {
    gelly = new GellyFactory('test');
  });

  describe('attr', function () {
    it('should return the GellyFactory with additional set attribute', function () {
      gelly.attr('testAttr', 1);
      expect(gelly.attributes.testAttr).to.equal(1);
    });

    it('should be chainable', function () {
      expect(gelly.attr('testAttr', 1).attr).to.be.a('Function');
    });
  });

  describe('build', function () {
    it('should return the primitive attibutes', function () {
      gelly.attr('testAttr', 1);
      gelly.attr('testAttrS', 's');
      const attributes = gelly.build();
      expect(attributes.testAttr).to.equal(1);
      expect(attributes.testAttrS).to.equal('s');
    });

    it('should apply functions and deep copy the return value', function () {
      gelly.attr('testFun', () => {return Math.random()});
      const attributes = gelly.build();
      const attributesAfter = gelly.build();
      expect(attributes.testFun).to.be.a('Number');
      expect(attributesAfter.testFun).to.not.be.equal(attributes.testFun);
    });

    it('should overwrite with passed params', function () {
      gelly.attr('testAttr', 1);
      const attributes = gelly.build({ testAttr: 2 });
      expect(attributes.testAttr).to.equal(2);

    });
  });

});