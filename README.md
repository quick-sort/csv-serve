# csv-serve
[![NPM version][npm-image]][npm-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

Serve csv files as json REST API

## Usage

```bash
csv-serve [options] csv_folder
```

if `csv_folder` is missing, current folder will be used
### options
    - `port` port to listen
    - `trim` whether or not trim each cell, default `true`
    - `axis` default is `row`, csv will be converted to an array of objects representing each line in csv, if `axis` is `col`, csv will be converted to an object, each property representing column in csv
    - `delimiter` csv delimiter, default `,`
    - `prefix` set the prefix of request path to match, default '/'

[npm-image]: https://img.shields.io/npm/v/csv-serve.svg?style=flat-square
[npm-url]: https://npmjs.org/package/csv-serve
[license-image]: http://img.shields.io/npm/l/csv-serve.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/csv-serve.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/csv-serve
