'use strict';
let Joi = require('joi');

let tasks = [
    { id: 1, name: 'Task1' },
    { id: 2, name: 'Task2' },
    { id: 3, name: 'Task3' },
];

exports.listAllTasks = function(req, res) {
    res.json(tasks);
};

exports.getSpecificTask = function(req, res) {
    let tasks_ = tasks.find(c => c.id === parseInt(req.params.id));
    if (!tasks_) return res.status(404).send('The task with given ID cannot be found!')
    res.json(tasks_);
};

exports.createTask = function(req, res) {
    let {error} = taskValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
   
    let task_ = {
        id: tasks.length + 1,
        name: req.body.name 
    };
    tasks.push(task_);
    res.json(task_);
};

exports.updateTask = function(req, res) {
    let tasks_ = tasks.find(c => c.id === parseInt(req.params.id));
    if (!tasks_) return res.status(404).send('The task with given ID cannot be found!')

    let {error} = taskValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    tasks_.name = req.body.name;

    res.json(tasks_);
};

exports.deleteTask = function(req, res) {
    let tasks_ = tasks.find(c => c.id === parseInt(req.params.id));
    if (!tasks_) return res.status(404).send('The task with given ID cannot be found!')

    let taskIndex = tasks.indexOf(tasks_); 
    tasks.splice(taskIndex, 1);

    res.json(tasks_); 
};

function taskValidation(task_) {
    const getTasksSchema =  {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(task_, getTasksSchema);
}