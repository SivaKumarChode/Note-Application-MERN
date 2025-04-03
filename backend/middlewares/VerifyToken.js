const jwt = require("jsonwebtoken");

const AuthToken = (req, res, next) => {
  try {
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith("Bearer")
    ) {
      return res.status(400).json({
        message: "Token not coming form the Bearer",
      });
    }
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(400).json({
        message: "Token not found !!",
      });
    }
    const decode = jwt.verify(token, "noteApplication");
    // console.log("decode is -->",decode);

    req.user = decode;
    // console.log("req.user -->",req.user);

    req.userId=decode.userId
    // console.log("req.userId is -->",req.userId);

    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

module.exports=AuthToken
