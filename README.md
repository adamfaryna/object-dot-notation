# Object dot notation converter

This is simple implementation of object to object in dot notation converter.

## What it does

Let me express it by example:

Input:
```
{ a: { b: { c: 1 }, e: 2 }, f: { g: 3, h: 4 }}
```

Output:
```
{ 'a.b.c': 1, 'a.e': 2, 'f.g': 3, 'f.h': 4 }
```

## How to run it

There is no specific demo code, but you can run tests if you want.

### To run tests

Install dependencies:
```npm i```

Run tests:
``` npm test ```

Run tests in watch mode:
``` npm run watch ```

## Contribution

If you know any ways to make it simpler, faster, better in any way, using ES6+ features (even not disclosed in specification like 'object spread'), without external libraries feel free to do it and send me pull request. Let's make it as good as possible and learn in the process.

##
