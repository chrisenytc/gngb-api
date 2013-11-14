/*
 * gngb-api
 * https://github.com/chrisenytc/gngb-api
 *
 * Copyright (c) 2013 Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

/*
 * Module dependencies
 */
var request = require('request');
var path = require('path');
var gm = require('gm').subClass({
  imageMagick: true
});
//
var dir = path.join(__dirname, 'badges');
//

/*
 * Private Methods
 */

//Write stream of image
var write = function (base, res) {
  base.stream('png', function (err, stdout) {
    if (err) {
      throw err;
    }
    res.setHeader('Expires', new Date(Date.now() + 600000));
    res.setHeader('Content-Type', 'image/png');
    stdout.pipe(res);
  });
};

//Create version badge
var createImage = function (res, name, version) {
  //Options
  var imgPath, width;
  //RegExp
  var re = /^\d\.\d.\d$/;
  //Test version
  if (re.test(version)) {
    imgPath = path.join(dir, name + '.png');
    width = 76;
  } else if (version.length === 6) {
    imgPath = path.join(dir, name + '-larger.png');
    width = 80;
  } else if (version.length === 7) {
    imgPath = path.join(dir, name + '-larger.png');
    width = 77;
  } else {
    imgPath = path.join(dir, name + '-larger.png');
    width = 74;
  }

  //Create Image
  var base = gm(imgPath)
    .font(path.join(__dirname, 'fonts', 'Arial.ttf'))
    .fontSize(10)
    .fill('#ffffff')
    .drawText(width, 12, version);
  //Write Stream and send to client
  write(base, res);
};

//Get formated service url
var getService = function (service, name, user) {
  //
  var services = [];
  //
  services['gh'] = 'https://api.github.com/repos/:user/:name/releases';
  services['npm'] = 'http://registry.npmjs.org/:name/latest';
  services['gem'] = 'https://rubygems.org/api/v1/gems/:name.json';
  services['bower'] = 'https://api.github.com/repos/:user/:name/releases';

  var str = services[service].replace(':name', name).replace(':user', user);
  //
  return str;

};

//Get data and format version
var getVersion = function (service, data) {
  switch (service) {
  case 'gh':
    return data[0].tag_name.replace(/^v/, '');
  case 'npm':
    return data.version;
  case 'gem':
    return data.version;
  case 'bower':
    return data[0].tag_name.replace(/^v/, '');
  default:
    console.log(service + 'not found!');
    break;
  }
};


/*
 * Public Methods
 */

//Test function
exports.test = function () {
  return "Tested successfully!";
};

//BadgeManager
exports.createBadge = function (res, service, name, user) {
  request(getService(service, name, user), function (error, response, body) {
    if (!error && response.statusCode === 200) {
      return createImage(res, service, getVersion(service, JSON.parse(body)));
    } else {
      res.send(404);
    }
  });
};
