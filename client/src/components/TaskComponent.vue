<template>
  <div class="ui centered" >
    <div class="task card ">
      <div v-if="editTask">
        <b-form-input v-model="task.name" v-on:keyup.13="updateTask(task)" class="editName" ></b-form-input>
        <b-button v-on:click="updatetask(task)" class="save" >Save</b-button>
      </div>
      <div v-else>
        <div class="task-img-wrapper" v-if="this.hasImage">
          <img v-bind:src="this.image.dataUrl" class="task-img" />
        </div>
          <img src="../assets/checkbox.png" alt="Todobox Checklist" v-show="!editTask && !this.task.done" v-on:click="completetask(task, index)">
        
          <img src="../assets/checkbox active.png" alt="Todobox Checklist" v-show="!editTask && this.task.done" v-on:click="tasknotcomplete(task, index)">
                
        <span class="taskName">{{this.task.name}}</span>
        <b-dropdown class="dropDown" variant="light" size="md" right no-caret>
          <template slot="button-content"><font-awesome-icon icon="ellipsis-v" /></template>
          <b-dropdown-item v-on:click="toggleTaskEdit" v-if="!this.task.done"><font-awesome-icon icon="edit"  /> Update</b-dropdown-item>
          <image-uploader
            :preview="false"
            :className="['fileinput', { 'fileinput--loaded': hasImage }]"
            capture="environment"
            :debug="1"
            doNotResize="gif"
            :autoRotate="true"
            outputFormat="verbose"
            @input="setImage"
            v-if="!this.task.done"
          >
            <label for="fileInput" slot="upload-label" id="file-input-label">
              <figure>
                <div class="dropdown-item"><font-awesome-icon icon="image" /> Image</div>
                </figure>
             </label>
          </image-uploader>

          <b-dropdown-item v-on:click="deletetask(task.id, index)"><font-awesome-icon icon="trash" /> Delete</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>    
</template>

<script>

export default {
  name: 'TaskComponent',
  props: ["task", "index"],
  data() {
    return {
      editTask: false,
      hasImage: false,
      image: null
    }
  },
  methods: {
    setImage: function(output) {
      this.hasImage = true;
      this.image = output;
      this.task.image = this.image;
    },
    openImgPopup(e) {
      e.preventDefault();
    },
    deletetask(id, i) {
      this.$emit("deleteTask", id, i);
    },
    toggleTaskEdit() {
      this.editTask = !this.editTask
    },
    updatetask(task) {
      this.$emit("updateTask", task);
      this.toggleTaskEdit();
    },
    completetask(task, i){
      this.$emit("completeTask", task, i);
    },
    tasknotcomplete(task, i){
      this.$emit("taskNotComplete", task, i);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .task {
    display: block;
    background-color: #FFFFFF;
    margin: 16px 8px;
    padding: 0.6rem;
    border: none;
  }

  .task img {
    margin: 2% 4%;
  }
  .text {
    font-size: 20px;
    color: black;
  }

  .editName {
    width: 80%;
    color: black;
  }

  .dropDown {
    
    position: absolute;
    right: 0.7em;
  }

  .save {
    position: absolute;
    top: 0.6em;
    right: 0.7em;
  }

  .hidden {
    display: none;
  }

  .task-img-wrapper {
    text-align: center;
  }

  .task-img {
    max-width: 100%;
    max-height: 200px;
  }
</style>
