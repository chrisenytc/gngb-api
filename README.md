# GNGB API [![Build Status](https://secure.travis-ci.org/chrisenytc/gngb-api.png?branch=master)](http://travis-ci.org/chrisenytc/gngb-api) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/chrisenytc/gngb-api/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

The API to get data of GitHub, Npm, Gem and Bower and make a badge.

## Getting Started
Install the module with: `npm install gngb-api`

```javascript
var gngb = require('gngb-api');

gngb.createBadge(res, 'gh', 'livi18n', 'chrisenytc');
```

## Documentation

#### .checkPackage(res, data, service, name, user)

**Parameter**: `res`
**Type**: `controller response`

**Parameter**: `data`
**Type**: `JSON Object`

**Parameter**: `service`
**Type**: `String`
**Example**: `gh`

**Parameter**: `name`
**Type**: `String`
**Example**: `livi18n`

**Parameter**: `user`
**Type**: `String`
**Example**: `chrisenytc`

The 'checkPackage' method is responsible for checking if the package exists and return a boolean value.

How to use this method

```javascript
var data {
  image: ''
};

gngb.checkPackage(res, data, 'gh', 'livi18n', 'chrisenytc');
```

#### .createBadge(res, service, name, user)

**Parameter**: `res`
**Type**: `controller response`

**Parameter**: `service`
**Type**: `String`
**Example**: `gh`

**Parameter**: `name`
**Type**: `String`
**Example**: `livi18n`

**Parameter**: `user`
**Type**: `String`
**Example**: `chrisenytc`

The 'createBadge' method is responsible for making version badges.

How to use this method

```javascript
gngb.createBadge(res, 'gh', 'livi18n', 'chrisenytc');
```

## Contributing

Please submit all issues and pull requests to the [chrisenytc/gngb-api](http://github.com/chrisenytc/gngb-api) repository!

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/chrisenytc/gngb-api/issues).

## License
Copyright (c) 2013 Christopher EnyTC

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
