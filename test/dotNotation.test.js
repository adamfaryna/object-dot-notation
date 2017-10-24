/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */

const { describe, it }  = require('mocha');
const { expect } = require('chai');

const toDotNotation = require('../src/dotNotation');

describe('dotNotation', () =>{
  describe('#toDotNotation', () => {
    it('should return undefined for undefined input', () => {
      expect(toDotNotation(undefined)).to.equal(undefined);
    });

    it('should return null for null on input', () => {
      expect(toDotNotation(null)).to.equal(null);
    });

    it('should return empty object for empty object on input', () => {
      expect(toDotNotation({})).to.deep.equal({});
    });

    it('should return object in dot notation for shallow object on input', () => {
      const input = { a: 1, b: 2, c: 3 };
      expect(toDotNotation(input)).to.deep.equal(input);
    });

    it('should return object in dot notation for nested objects on input', () => {
      expect(toDotNotation({ a: { b: { c: 1 }, e: 2 }, f: { g: 3, h: 4 }}))
        .to.deep.equal({ 'a.b.c': 1, 'a.e': 2, 'f.g': 3, 'f.h': 4 });
    });

    it('should return object in dot notation for object with Numbers on input', () => {
      expect(toDotNotation({ a: { b: { c: Number(1) }, e: new Number(2) }, f: { g: 3, h: Number(4) }}))
        .to.deep.equal({ 'a.b.c': Number(1), 'a.e': new Number(2), 'f.g': 3, 'f.h': Number(4) });
    });

    it('should return object in dot notation for object with strings on input', () => {
      expect(toDotNotation({ a: { b: { c: String(1) }, e: new String(2) }, f: { g: 3, h: String(4) }}))
        .to.deep.equal({ 'a.b.c': String(1), 'a.e': new String(2), 'f.g': 3, 'f.h': String(4) });
    });

    it('should return object in dot notation for object with nulls values on input', () => {
      expect(toDotNotation({ a: { b: { c: null }, e: null }, f: { g: 3, h: '4' }}))
        .to.deep.equal({ 'a.b.c': null, 'a.e': null, 'f.g': 3, 'f.h': '4' });
    });

    it('should return object in dot notation for object with undefined values on input', () => {
      expect(toDotNotation({ a: { b: { c: undefined }, e: undefined }, f: { g: 3, h: '4' }}))
        .to.deep.equal({ 'a.b.c': undefined, 'a.e': undefined, 'f.g': 3, 'f.h': '4' });
    });
  });
});
