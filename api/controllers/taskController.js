let Joi = require('joi');

let tasks = [
    { id: 1, name: 'Task1', done: false, image: null },
    { id: 2, name: 'Task2', done: false, image: null },
    { id: 3, name: 'Task3', done: false, image: null },
];

exports.listAllTasks = function(req, res) {
    res.send(tasks);
};

exports.getSpecificTask = function(req, res) {
    let tasks_ = tasks.find(c => c.id === parseInt(req.params.id));
    if (!tasks_) return res.status(404).send('The task with given ID cannot be found!')
    res.send(tasks_);
};

exports.createTask = function(req, res) {
    let {error} = taskValidation(req.body);
    if (!error) return res.status(400).send(error.details[0].message);
   
    let task_ = {
        id: tasks.length + 1,
        name: req.body.name,
        done: req.body.done,
        image: req.body.image
    };
    tasks.push(task_);
    res.send(task_);
};

exports.updateTask = function(req, res) {
    let tasks_ = tasks.find(c => c.id === parseInt(req.params.id));
    if (!tasks_) return res.status(404).send('The task with given ID cannot be found!')

    let {error} = taskValidation(req.body);
    if (!error) return res.status(400).send(error.details[0].message);
  
    tasks_.name = req.body.name;
    tasks_.done = req.body.done;

    res.send(tasks_);
};

exports.deleteTask = function(req, res) {
    let tasks_ = tasks.find(c => c.id === parseInt(req.params.id));
    if (!tasks_) return res.status(404).send('The task with given ID cannot be found!')

    let taskIndex = tasks.indexOf(tasks_); 
    tasks.splice(taskIndex, 1);

    res.send(tasks_); 
};

exports.deleteAllTasks = function(req, res) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].done) {
            tasks.splice(i, 1);
            i--;
        }
    }
    res.send(tasks); 
};

function taskValidation(task_) {
    const getTasksSchema =  {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(task_, getTasksSchema);
}