const BaseResponse = (code, status, data) => {
  return {
    code: code,
    status: status,
    data: data
  };
};

module.exports = BaseResponse;
