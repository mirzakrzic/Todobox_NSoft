<template>
  <div class="content container col-md-12">
      <div class="raw">
        <div class="toDo lists col-md-6">
            <b>To-do list</b>
            <CreateTaskComponent v-on:createTask="addTask" />
            <hr>
            <div  v-bind:key="task.id" v-for="(task, i) in tasks">  
                <TaskComponent
                    v-if = !task.done
                    v-bind:task="task" 
                    v-bind:key="task.id" 
                    v-bind:index="i"
                    @deleteTask="deletetask"
                    @updateTask="updatetask"
                    @completeTask="completetask"
                    @taskNotComplete="tasknotcomplete"
                />
            </div>
         </div>

        <div class="done lists col-md-6">
            <b>Done</b>
            <b-button class="crateTask" v-on:click="deletAllTasks" ><font-awesome-icon icon="trash"/></b-button>
            <hr>
            <div v-bind:key="task.id" v-for="(task, i) in tasks">
                <TaskComponent
                    v-if = task.done
                    v-bind:task="task" 
                    v-bind:key="task.id" 
                    v-bind:index="i"
                    @deleteTask="deletetask"
                    @updateTask="updatetask"
                    @completeTask="completetask"
                    @taskNotComplete="tasknotcomplete"
                />
            </div>
        </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios';
import TaskComponent from "./TaskComponent";
import CreateTaskComponent from "./CreateTaskComponent";

export default {
    name: 'TaskListComponent',
    components: {
        TaskComponent,
        CreateTaskComponent
    },
    data() {
        return {
            tasks: []
        }
    },
    created() {
        let self = this;
        axios.get('http://localhost:5000/api/tasks/')
        .then(function(res){
            self.tasks = res.data;
        })
        .catch(function(error){
            throw error;
        });
    },
    methods: {
        addTask(task){
            let self = this;
            axios.post('http://localhost:5000/api/tasks/', {
                name: task.nameText,
                done: false
            })
            .then(function(res){
                let currData = self.tasks;
                currData.push(res.data);
                self.tasks = currData;
            })
            .catch(function(error){
                throw error;
            });
        },
        deletAllTasks() {
            let self = this;
            axios.patch('http://localhost:5000/api/tasks/')
            .then(function(res){
                self.tasks = res.data;
            })
            .catch(function(error){
                throw error;
            });
        },
        deletetask(id, i) {
            let self = this;
            axios.delete("http://localhost:5000/api/tasks/" + id)
            .then(function(){
                self.tasks.splice(i, 1);
            })
            .catch(function(error){
                throw error;
            });
        },
        updatetask(task) {
            axios.put("http://localhost:5000/api/tasks/" + task.id, task)
            .catch(function(error){
                throw error;
            });
        },
        completetask(task, index){
            let self = this;
            axios.put("http://localhost:5000/api/tasks/" + task.id, {
                name: task.name,
                done: true
            })
            .then(function(res){
                let currData = self.tasks;
                currData[index].done = res.data.done;
                self.tasks = currData;
            })
            .catch(function(error){
                throw error;
            });
        },
        tasknotcomplete(task, index){
            let self = this;
            axios.put("http://localhost:5000/api/tasks/" + task.id, {
                name: task.name,
                done: false
            })
            .then(function(res){
                let currData = self.tasks;
                currData[index].done = res.data.done;                
                self.tasks = currData;
            })
            .catch(function(error){
                throw error;
            });
        }
    }
}
</script>

<style scoped>

.container {
    margin-top: 3%;
    padding: 0;
}

.lists {
    padding: 2%;
    display: inline-block;
    background-color: #F5F6FA;
    border-radius: 2%;
    font-size: 1.2rem; 
    vertical-align: top !important; 
}

.toDo {
    margin-right: 2%;
    margin-left: -2%;
}

.done {
    margin-right: -2%;
    margin-left: 2%;
}

.crateTask {
  border: none !important;
  border-radius: 50%;
  color: #656568;
  background-color: #E6E8EF;
  padding: 0.2rem 0.7rem;
  font-size: 1.5rem;
  display: inline;
  color: grey !important;
  position: absolute; 
  right: 1.5em;
  top: 0.55em;
}

</style>