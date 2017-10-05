import GellyFactory from './gelly';
import _ from 'lodash';

const Gelly = {
  definedFactories: {},
  define(name) {
    const factory = new GellyFactory(name);
    this.definedFactories[name] = {
      default: factory,
    };
    return factory;
  },
  defineTrait(name, trait) {
    const factory = this.definedFactories[name];
    if (!factory) {
      throw new Error(`undefined factory name ${name}`);
    }

    const traitFactory = _.cloneDeep(factory.default);
    this.definedFactories[name][trait] = traitFactory;
    return traitFactory;
  },
  build(name, attributes, trait = 'default') {
    return this.definedFactories[name][trait].build(attributes);
  },
};


export default Gelly;
