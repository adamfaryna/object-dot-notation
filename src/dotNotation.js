/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */

const isObject = object => Object.prototype.toString.call(object).endsWith('Object]');

module.exports = function toDotNotation(object) {
  if (typeof object === 'undefined' ||
      object === null ||
      Object.keys(object).length === 0) {
   return object;
  }

  let result = {};
  Object.keys(object).forEach( key => {
    if (isObject(object[key])) {
      const subObject = toDotNotation(object[key]);
      Object.keys(subObject).forEach( subKey => result[`${key}.${subKey}`] = subObject[subKey]
      );

    } else {
      result[`${key}`] = object[key];
    }
  });

  return result;
};
