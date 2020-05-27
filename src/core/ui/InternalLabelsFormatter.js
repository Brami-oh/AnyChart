goog.provide('anychart.core.ui.InternalLabelsFormatters');

/**
 * Return formatter function that changes text depend on closure values.
 *
 * @param {string} text - Text for formatting.
 * @param {?number} maxLength - Maximum length of string.
 * @param {string=} opt_paddingRightChars - Characters that will appended to the string if string has more characters
 *   needed.
 *
 * @return {string} - Formatter function.
 */
anychart.core.ui.InternalLabelsFormatters.getLengthFormatter = function (text, maxLength, opt_paddingRightChars) {
    opt_paddingRightChars = opt_paddingRightChars || '...';

    if (goog.isDefAndNotNull(maxLength)) {
        return text.slice(0, maxLength) + (text.length > maxLength ? opt_paddingRightChars : '');
    }

    return text;
};
