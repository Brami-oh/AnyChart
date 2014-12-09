goog.provide('anychart.core.cartesian.series.Column');

goog.require('anychart.core.cartesian.series.WidthBased');



/**
 * @param {(anychart.data.View|anychart.data.Set|Array|string)=} opt_data Data for the series.
 * @param {Object.<string, (string|boolean)>=} opt_csvSettings If CSV string is passed, you can pass CSV parser settings
 *    here as a hash map.
 * @constructor
 * @extends {anychart.core.cartesian.series.WidthBased}
 */
anychart.core.cartesian.series.Column = function(opt_data, opt_csvSettings) {
  goog.base(this, opt_data, opt_csvSettings);

  // Define reference fields for a series
  this.referenceValueNames = ['x', 'value', 'value'];
  this.referenceValueMeanings = ['x', 'z', 'y'];
  this.referenceValuesSupportStack = true;
};
goog.inherits(anychart.core.cartesian.series.Column, anychart.core.cartesian.series.WidthBased);
anychart.core.cartesian.series.Base.SeriesTypesMap[anychart.enums.CartesianSeriesType.COLUMN] = anychart.core.cartesian.series.Column;


/** @inheritDoc */
anychart.core.cartesian.series.Column.prototype.drawSubsequentPoint = function() {
  var referenceValues = this.getReferenceCoords();
  if (!referenceValues)
    return false;

  if (this.hasInvalidationState(anychart.ConsistencyState.APPEARANCE)) {

    var x = referenceValues[0];
    var zero = referenceValues[1];
    var y = referenceValues[2];

    /** @type {!acgraph.vector.Rect} */
    var rect = /** @type {!acgraph.vector.Rect} */(this.rootElement.genNextChild());
    var barWidth = this.getPointWidth();

    this.getIterator().meta('x', x).meta('zero', zero).meta('y', y).meta('shape', rect);

    rect.setX(x - barWidth / 2).setY(Math.min(zero, y)).setWidth(barWidth).setHeight(Math.abs(zero - y));

    this.colorizeShape(false);

    this.makeHoverable(rect);
  }

  if (this.hasInvalidationState(anychart.ConsistencyState.HATCH_FILL)) {
    var iterator = this.getIterator();
    var hatchFillShape = this.hatchFillRootElement ?
        /** @type {!acgraph.vector.Rect} */(this.hatchFillRootElement.genNextChild()) :
        null;
    iterator.meta('hatchFillShape', hatchFillShape);
    var shape = /** @type {acgraph.vector.Shape} */(iterator.meta('shape'));
    if (goog.isDef(shape) && hatchFillShape) {
      hatchFillShape.deserialize(shape.serialize());
    }
    this.applyHatchFill(false);
  }

  return true;
};


/**
 * @inheritDoc
 */
anychart.core.cartesian.series.Column.prototype.getType = function() {
  return anychart.enums.CartesianSeriesType.COLUMN;
};


//exports
anychart.core.cartesian.series.Column.prototype['fill'] = anychart.core.cartesian.series.Column.prototype.fill;//inherited
anychart.core.cartesian.series.Column.prototype['hoverFill'] = anychart.core.cartesian.series.Column.prototype.hoverFill;//inherited
anychart.core.cartesian.series.Column.prototype['stroke'] = anychart.core.cartesian.series.Column.prototype.stroke;//inherited
anychart.core.cartesian.series.Column.prototype['hoverStroke'] = anychart.core.cartesian.series.Column.prototype.hoverStroke;//inherited
anychart.core.cartesian.series.Column.prototype['hatchFill'] = anychart.core.cartesian.series.Column.prototype.hatchFill;//inherited
anychart.core.cartesian.series.Column.prototype['hoverHatchFill'] = anychart.core.cartesian.series.Column.prototype.hoverHatchFill;//inherited
