<template>
  <div>
    <h1>Counter: {{ counterState.count }}</h1>
    <div class="buttonWraper">
      <button class="btn" @click="increment">Increament</button>
      <button class="btn" @click="dicrement">Dicrement</button>
      <button class="btn" @click="incrementBy(10)">IncrementBy</button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "counterVue",
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.$store.dispatch("counterModule/incrementCounter")
    },
    dicrement() {
      this.$store.dispatch("counterModule/dicrementCounter")
    },
    incrementBy(count) {
      this.$store.dispatch("counterModule/incrementByCounter", {value: count})
    }
  },
  computed: mapGetters({
    counterState: "getCounterState"
  })
}
</script>

<style scoped>
.buttonWraper {
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  width: 100%;
}

.btn {
  padding: 8px 15px;
  margin: 0 10px;
  color: #ffff;
  border-radius: 6px;
  background: crimson;
  border: none;
}
</style>