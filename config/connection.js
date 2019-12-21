//!install NPM mysql node.js 
const mysql = require('mysql');

require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,  //Port is localroot
    user: 'root', //
    password: process.env.PASSWORD,
    database: 'todo_db'
})

connection.connect(err => {
    if (err) throw err;
    console.log(`You have been connected to thread ID: ${connection.threadId}`);
    //seeAllTodos();
    // seeTodo(1);
    // createTodo("this is my branc new todo");
    // deleteToDoId(3);
    // updateValue(2, 'OHH YAAAAAA');
    // seeAllTodos();
    //connection.end();
});


seeAllTodos = cb => {
    connection.query("SELECT * FROM todos", (err, res) => {
        if (err) throw err;
        cb(res);
    });

};
seeTodo = (todoId, cb) => {
    connection.query(
        "SELECT todo FROM todos WHERE ?",
        { id: todoId },
        (err, res) => {
            if (err) throw err;
            cb(res[0].todo);
        }
    );
};
createTodo = message => {
    connection.query("INSERT INTO todos SET ?", { todo: message }, err => {
        if (err) throw err;
    });
};

deleteTodo = todoId => {
    connection.query("DELETE FROM todos WHERE ?", { id: todoId }, err => {
        if (err) throw err;
    });
};

//Update a value in mysql
updateTodo = (todoId, updatedText) => {
    connection.query(
        "UPDATE todos SET ? WHERE ?",
        [{ todo: updatedText }, { id: todoId }],
        err => {
            if (err) throw err;
        }
    );
};
//Challenge: Create a database for all the clothes you have.
//Try to talk to javascript with the mysql package
//ANother challenge would be to throw in inquirer in there.
module.exports = {
    seeAllTodos: seeAllTodos,
    seeTodo: seeTodo,
    createTodo: createTodo,
    deleteTodo: deleteTodo,
    updateTodo: updateTodo
};