module.exports = function(app) {
	var taskList = require('../controllers/taskController');

	// todoList Routes
	app.route('/api/tasks')
		.get(taskList.listAllTasks)
		.post(taskList.createTask)
		.patch(taskList.deleteAllTasks);

	app.route('/api/tasks/:id')
		.get(taskList.getSpecificTask)
		.put(taskList.updateTask)
		.delete(taskList.deleteTask);
};
