# csv-serve
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

