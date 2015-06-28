module.exports.GET = function (IOResponse, IOBaseFolder, IOBaseFile) {
  IOResponse.sendFile(IOBaseFolder + IOBaseFile);
};
