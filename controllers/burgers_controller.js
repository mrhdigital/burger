var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

router.get('/', function (req, res) {
    burger.all(function (burger_data) {
        //console.log(burger_data);
        res.render('index', { burger_data });

    })
});

// put route -> back to index
router.put("/burgers/update", function (req, res) {
    burger.update(req.body.burger_id, function (result) {
        // wrapper for orm.js that using MySQL update callback will return a log to console,
        // render back to index with handle
        //console.log(result);
        res.redirect("/");
    });
});
// post route -> back to index
router.post("/burgers/create", function (req, res) {
    // takes the request object using it as input for buger.addBurger
    burger.create(req.body.burger_name, function (result) {
        // wrapper for orm.js that using MySQL insert callback will return a log to console,
        // render back to index with handle
       // console.log(result);
        res.redirect("/");
    });
});


module.exports = router;
