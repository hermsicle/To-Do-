const express = require('express');
const router = express.Router();
const db = require('../config/connection')


router.get("/", (req, res) => {
    console.log("getting all todos");
    db.seeAllTodos(results => {
        res.send(results);
    });
});

router.get("/:id", (req, res) => {
    db.seeTodo(req.params.id, result => {
        res.send(result);
    });
});

router.post("/", (req, res) => {
    const message = req.body.text;
    db.createTodo(message);
    res.send("success");
});

router.delete("/:id", (req, res) => {
    console.log(req.params);
    db.deleteTodo(req.params.id);
    res.send("success");
});

router.patch("/", (req, res) => {
    console.log(req.body);
    db.updateTodo(req.body.id, req.body.text);
    res.send("success");
});

module.exports = router;