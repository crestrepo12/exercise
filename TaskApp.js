var readline = require('readline')

var options = 'show all, show active, show completed';

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


//Defining our functions
function createTask(description) { // no need for completed in parameter, we want to set the value to default as false
    var task = {
        description: description,
        completed: false
    }
    return task;
}

function forEachElem(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}

function showAll(arr) {
    forEachElem(arr, logIt);
}

function showCompleted(task, i) {
    if (task.completed) {
        logIt(task, i)
    }
}

function showActive(task, i) {
    if (!task.completed) {
        logIt(task, i);
    }
}

function toggle(i) {
    if (tasks[i].completed) {
        tasks[i].completed = false;
    } else {
        tasks[i].completed = true;
    }
}

function logIt(task, i) {
    console.log(i + '. ' + task.description + '. Completed: ' + task.completed)
}

function clear() {
    process.stdout.write('\u001B[2J\u001B[0;0f')
}

//Our variables
var tasks = [];


//Our input handling with our read line
rl.on('line', function (input) {
    clear()

    var inputArr = input.split(' ');
    var command = inputArr[0];
    var description = inputArr.slice(1).join(' ');

    if (command === 'add') {
        tasks.push(createTask(description))

    } else if (command === 'show') {
        if (description === 'all') {
            showAll(tasks);
        } else if (description === 'active') {
            forEachElem(tasks, showActive);
        } else if (description === 'completed') {
            forEachElem(tasks, showCompleted)
        }
    } else if (command === 'toggle') {
        toggle(description)
    }

    console.log('Please type a command:')
    console.log('Please choose one: [' + options + '] $')
})
console.log('Please type a command:')
console.log('Please choose one: [' + options + ']')
