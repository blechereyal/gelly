import _ from 'lodash';
class GellyFactory {
  constructor(name) {

    this.name = name;
    this.attributes = {};
  }

  attr(attrName, value) {
    this.attributes[attrName] = value;
    return this;
  }

  build(attributes) {
    const attributesCopy = _.cloneDeep(this.attributes);
    _.each(attributesCopy, (attr, name) => {
      if (_.isFunction(attr)) {
        attributesCopy[name] = attr.apply(this);
      }
    });
    return _.merge(attributesCopy, attributes);
  }
}

export default GellyFactory;
