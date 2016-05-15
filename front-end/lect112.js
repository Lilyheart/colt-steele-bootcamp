var todos = [];

var input = prompt("What would you like to do?");

while (input.toLowerCase() !== "quit" && input.toLowerCase() !== "exit") {

    if (input.toLowerCase() === "list") {
        listTodos();
    } else if (input.toLowerCase() === "new") {
        addTodo();
    } else if (input.toLowerCase() === "delete") {
        deleteTodo();
    }

    var input = prompt("What would you like to do next?");

}

console.log("You have quit the todo list");

function listTodos() {
    console.log("*****************");
    todos.forEach(function(todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("*****************");
}

function addTodo() {
    var newInput = prompt("What would you like to add to your todo list?");
    todos.push(newInput);
    console.log(newInput + " added to the list.")
}

function deleteTodo() {
    var delIndex = Number(prompt("Enter index of todo you want to delete"))
    console.log(todos.splice(delIndex, 1) + " was removed");
}
