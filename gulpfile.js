'use strict';

const copyfiles = require('copyfiles');
const path = require('path');

function postBuild(cb) {
  const paths = ['alkemio-data-template.ods', 'dist'];
  copyfiles(paths, 0, cb);
}

exports.postBuild = postBuild;
exports.default = postBuild;
