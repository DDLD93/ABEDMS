const jwt = require("jsonwebtoken");

 function Admin (req, res, next) {
    try {
        const token = req.header("x-auth-token");
        if (!token) return res.status(403).send("Access denied.");

        const decoded = jwt.verify(token, "hedjsdkeudhfrejdsjxe8dx9jdxd73n");
        req.user = decoded;
        if (!decoded) return res.status(403).send("Access denied.");
        if (decoded.userType != "admin") return res.status(403).send("Access denied.");
        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
};

function Qa (req, res, next) {
    try {
        const token = req.header("x-auth-token");
        if (!token) return res.status(403).send("Access denied.");

        const decoded = jwt.verify(token, "hedjsdkeudhfrejdsjxe8dx9jdxd73n");
        req.user = decoded;
        if (!decoded) return res.status(403).send("Access denied.");
        if (decoded.userType != "qa") return res.status(403).send("Access denied.");
        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
};
function Staff (req, res, next) {
    try {
        const token = req.header("x-auth-token");
        if (!token) return res.status(403).send("Access denied.");

        const decoded = jwt.verify(token,"hedjsdkeudhfrejdsjxe8dx9jdxd73n");
        req.user = decoded;
        if (!decoded) return res.status(403).send("Access denied.");
        if (decoded.userType != "staff") return res.status(403).send("Access denied.");
        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
};
async function PSP (req, res, next) {
    try {
        const token = req.header("x-auth-token");
        if (!token) return res.status(403).send("Access denied.");
        const decoded = jwt.verify(token,"hfds6df49dmcv3surkd8rjdfc8fd0e3y");
        req.user = decoded;
        if (!decoded) return res.status(403).send("Access denied.");
        if (decoded.userType != "admin") return res.status(403).send("Access denied.");
        //console.log(req.user)
        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
};

module.exports ={
    Admin,
    Qa,
    Staff,
    PSP
}