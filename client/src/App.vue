<template>
  <div id="app">
    <b-navbar type="light" id="navbar" variant="info">
      <b-navbar-brand href="#"><img alt="Todobox logo" src="./assets/logo.png"></b-navbar-brand>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right no-caret>
          <!-- Using 'button-content' slot -->
          <template slot="button-content">
            <b>Username</b> 
            <div class="user"><font-awesome-icon icon="user"/></div>
          </template>
          <b-dropdown-item href="#"><font-awesome-icon icon="sign-out-alt"/>  Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>

    <div class="content">
      <b>Manage your to do list</b>
      <p>Click on checkbox or drag and drop to done</p>

      <TaskListComponent />
     </div>
  </div>
</template>

<script>
import TaskListComponent from './components/TaskListComponent.vue'

export default {
  name: 'app',
  components: {
    TaskListComponent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans');

* {
  font-family: 'Nunito Sans', sans-serif;
}

#navbar {
  padding: 1% 19%;
  background-color: #F5F6FA !important;

}

#navbar img {
  width: 65%;
}

.card {
  border: none !important;
}

.user {
  border: 1px solid #D2D3D5;
  border-radius: 50%;
  color: #D2D3D5;
  background-color: #E8E9EC;
  padding: 0.4rem 1rem; 
  font-size: 2rem;
  display: inline;
  margin-left: 10px;
}

.content {
  padding: 2% 20%;
  font-size: 1.3rem;
}

.dropDown {
  background: none !important;
}

.content p {
  font-size: 1rem;
  color: #868686;
}
#fileInput {
    display: none !important;
  }

#file-input-label {
  margin-bottom: 0;
}

#file-input-label > figure {
  margin: 0 !important;
}

.dropDown button {
    background: transparent !important;
    border: none !important;
    color: #656568 !important;
}

@media only screen and (max-width : 768px) { 
    .crateTask {
      right: 0.8em !important;
      top: 0.3em !important;
    }
    .toDo {
      margin-right: 0% !important;
      margin-left: 0% !important;
    }

    .done {
      margin-right: 0% !important;
      margin-left: 0% !important;
      margin-top: 8% !important; 
    }

    .lists {
      padding: 4% !important;
    }

    .dropDown {
        right: 0.4em !important;
        top: 0.3em !important;

    }
 }

</style>
