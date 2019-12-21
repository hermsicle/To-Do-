renderTodos = () => {
    $.ajax({
        type: "GET",
        url: "/api"
    }).then(res => {
        $("#todo-container").empty();
        //console.log(res);
        res.map(element => {
            $("#todo-container").append(`
        <div class="card">
              <div class="card-body">
                <p 
                class="card-text">
                  ${element.todo}
                </p>
                <div class="text-center">
                  <button
                    id="editBtn"
                    href="#"
                    data-id=${element.id}
                    class="btn btn-outline-success text-center"
                    style="width: 150px;"
                    >Edit</button
                  >
                  <button
                    id="deleteBtn"
                    href="#"
                    data-id=${element.id}
                    class="btn btn-outline-danger text-center"
                    style="width: 150px;"
                    >Delete</button
                  >
                </div>
              </div>
            </div>`);
        });
    });
};

postTodo = (tx, cb) => {
    $.ajax({
        type: "POST",
        url: "/api",
        data: { text: tx }
    }).then(res => {
        cb(res);
        // renderTodos();
    });
};

$(document).ready(function () {
    renderTodos();
});

$("#submitBtn").on("click", () => {
    const text = $("#inputText").val();
    postTodo(text, () => {
        renderTodos();
    });
})

//Cant use arrow function when trying to console log 'this' because it will pull from the global scope
//It will console whats in the Window, not in the DOM, since we dynamically created these buttons using jQuery
// $(document).on('click', '.btn', function () {
//     // console.log(this)
//     // console.log($(this).attr('data-id'))
// })

updateToDo = (id, text, cb) => {
    $.ajax({
        type: 'PATCH',
        url: '/api',
        data: { id: id, text: text }
    }).then(res => {
        cb(res)
    })
}

deleteToDo = (id, cb) => {
    $.ajax({
        type: 'DELETE',
        url: `/api/${id}`
    }).then(res => {
        cb(res);
    })
}

//we use document to target dynamically created text in the DOM
$(document).on('click', '#editBtn', function () {
    //console.log($(this)) //jQuery This will log the whole object
    console.log(this)   //this will just console the button itself
    let id = $(this).attr('data-id')
    let text = $("#inputText").val();

    //console.log(id, text)
    updateToDo(id, text, () => {
        renderTodos();
    })
})

$(document).on('click', '#deleteBtn', function () {

    let id = $(this).attr('data-id');
    //console.log(id)

    deleteToDo(id, () => {
        renderTodos();
    })
})

