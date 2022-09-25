const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(() => resolve(), timer));
  };
  
  module.exports = {
    sleep,
  };
  