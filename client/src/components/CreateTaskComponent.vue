<template>
    <div class="content container ">
        <div class="class" v-show="!isCreating">
            <b-button class="crateTask" v-on:click="openForm" ><font-awesome-icon icon="plus"/></b-button>
        </div>
        <div class="task card cardAdd" v-show="isCreating">
            <b-form-input v-model="name" class="editName" ></b-form-input>
            <b-button v-on:click="sendForm()" class="saveTask" right >Save</b-button>
            <b-button v-on:click="closeForm" class="cancel" >Cancel</b-button>
      </div>
    </div>
</template>

<script>
export default {
    name: 'CreateTaskComponent',
    data() {
        return {
            tasks: [],
            name: "",
            isCreating: false
        }
    },
    methods: {
        openForm(){
            this.isCreating = true;
        },
        closeForm(){
            this.isCreating = false;
        },
        sendForm() {
            let self = this;
            if (self.name.length > 0) {
                let nameText = self.name;
                self.$emit("createTask", {
                    nameText
                });
                self.name = "";
                self.isCreating = false;
            }
        }
    }
};
</script>

<style scoped>

.saveTask {
    position: absolute;
    top: 4.4em;
    right: 1em;
    width: 20%;
    
}

.cancel {
    background-color: white;
    color: #656568; 
    width: 20%;
    margin-top: 1em;
}

.cardAdd {
    padding: 0.8em;
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