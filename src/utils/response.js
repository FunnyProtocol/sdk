export const successResponse = (res, data) => {
  return res.status(200).json({
    success: true,
    data
  });
};

export const errorResponse = (res, message, code = 500) => {
  return res.status(code).json({
    success: false,
    error: message
  });
};
