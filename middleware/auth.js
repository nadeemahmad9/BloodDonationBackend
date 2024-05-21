const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ errorMessage: "Unauthorized" });

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified.user;

    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ errorMessage: "Unauthorized" });
  }
}

module.exports = auth;

// const jwt = require("jsonwebtoken");

// async function auth(req, res, next) {
//   try {
//     const token = req.cookies.token;
//     if (!token) return res.status(401).json({ errorMessage: "Unauthorized" });

//     const verified = await new Promise((resolve, reject) => {
//       jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(decoded);
//         }
//       });
//     });

//     req.user = verified.user;
//     next();
//   } catch (err) {
//     console.error(err);
//     res.status(401).json({ errorMessage: "Unauthorized" });
//   }
// }

// module.exports = auth;
