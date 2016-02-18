import { Instance } from 'sequelize';


/**
 * Creates a wrapper of Instance#get in Sequelize, e.g. to hide certain fields.
 *
 * @param {Object -> Object} fn function that modifies the plain object returned
 */
export function plainGetterFactory(fn) {
    return function(...args) {
        let ret = Instance.prototype.get.apply(this, args); // eslint-disable-line no-invalid-this
        if (typeof args[0] === 'object' && args[0].plain)
            ret = fn(ret);
        return ret;
    };
}
