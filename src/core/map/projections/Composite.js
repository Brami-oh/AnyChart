goog.provide('anychart.core.map.projections.Composite');
goog.require('anychart.core.map.projections.Base');



/**
 * AnyChart Map class.
 * @param {Object} config Projection configuration.
 * @extends {anychart.core.map.projections.Base}
 * @constructor
 */
anychart.core.map.projections.Composite = function(config) {
  anychart.core.map.projections.Composite.base(this, 'constructor');

  this.config = config;
};
goog.inherits(anychart.core.map.projections.Composite, anychart.core.map.projections.Base);


/** @inheritDoc */
anychart.core.map.projections.Composite.prototype.forward = function(x, y) {
  // x = goog.math.toDegrees(x);
  // y = goog.math.toDegrees(y);

  // console.log(x, y);

  return [x, y];
};


/** @inheritDoc */
anychart.core.map.projections.Composite.prototype.invert = function(x, y) {
  // x = goog.math.toRadians(x);
  // y = goog.math.toRadians(y);

  return [x, y];
};