const start = () => {
  console.log("Request handler 'start' was called.");
  return "Hello Start";
};

const upload = () => {
  console.log("Request handler 'upload' was called.");
  return "Hello Upload";
};

exports.start = start;
exports.upload = upload;
