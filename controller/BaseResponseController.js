const BaseResponse = (code = 200, status = 'Data Found', data) => {
  return {
    code: code,
    status: status,
    data: data
  };
};

module.exports = BaseResponse;
