const router = require("express").Router()
let User = require("../models/user.model");
let Project = require("../models/project.model");

var authToken = function (req, res, next) {
    let token = req.body.token;
    User.findOne({ token: token }, (err, user) => {
        if (err) res.status(400).json("Error: " + err);
        else {
            if(user != null){
                res.locals.user = user;
                next()
            }
            else {
                res.status(400).json("Authentication error.");
            }
        }
    })
  }

// Refactor back into GET with the token as a Bearer.
router.route("/").post(authToken,(req, res) => {
    User.findOne({token:req.body.token}) // all
    .populate('projects')
    .exec(function (err, user) {
        if (err) res.status(400).json("Error: " + err);
        else {
            res.json(user.projects) 
        }
  });
});

router.route("/new").post(authToken,(req, res) => {
    let projectName = req.body.projectName;
    let project = new Project({name: projectName});
    project.save().then(() => {
        res.locals.user.projects.push(project);
        res.locals.user.save(function(err) {
            if (err) res.status(400).json("Error: " + err);
            res.json("Project created sucessfully.") 
        });
    }).catch(err => res.status(400).json("Error: " + err))
});

module.exports = router