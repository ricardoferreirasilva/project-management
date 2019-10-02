const router = require("express").Router()

let User = require("../models/user.model");


router.route("/").get((req, res) => {
    User.find().then(users => res.json(users))
        .catch(err => res.status(400).json("Error: " + err))
});

router.route("/create").post((req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;

    let newUser = new User({ username, email })
    newUser.setPassword(password)

    newUser.save().then(() => { res.json("User created sucessfully.") })
        .catch(err => res.status(400).json("Error: " + err))
});

router.route("/login").post((req, res) => {
    let name = req.body.username;
    let password = req.body.password;

    let user = User.findOne({ username: name }, (err, user) => {
        if (err) res.status(400).json("Error: " + err);
        else {

            if (user.validPassword(password)) {
                res.send({ token: "yourtoken" });
            }
            else {
                res.status(400).json("Authentication error.");
            }
        }
    })

});



module.exports = router