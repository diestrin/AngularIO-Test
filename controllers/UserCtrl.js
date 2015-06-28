module.exports.GET = function (IOResponse, IOBaseFolder, IOBaseFile) {
  IOResponse.sendFile(IOBaseFolder + IOBaseFile);
};

module.exports.POST = function (IOResponse) {
  IOResponse.json({user: 'tobi'});
};
