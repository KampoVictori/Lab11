<template>
  <form @submit.prevent="save">
    ПІБ <input type="text" v-model="worker.Name"><br>
    Посада <input type="text" v-model="worker.position"> <br>
    З/п <input type="number" v-model.number="worker.salary"> <br>
    К-сть дітей <input type="number" v-model.number="worker.count_kids" > <br>
    Стаж <input type="number" v-model.number="worker.experience" > <br>
    <button type="submit">Зберегти</button>
  </form>
</template>
<script>
import storage from "../storage";
export default {
  data() {
    return {
      worker: {
        Name: "",
          position:"",
          salary: 0,
          count_kids: 0,
          experience: 0 
      },
    };
  },
  methods: {
    save() {
      let newWorker = Object.assign({}, this.worker);
      newWorker.Id = Date.now();
      storage.worker.push(newWorker);
      this.$router.push(`/worker/${newWorker.Id}`);
    }
  },
};
</script>