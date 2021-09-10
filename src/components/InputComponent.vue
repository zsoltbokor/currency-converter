<template>
  <div class="input-wrapper">
    <input type="text"
           placeholder="Source value"
           @keyup="updateInput('value', $event.target.value)"
           v-bind:value="input.value"
    />
    <input type="text"
           placeholder="YYYY-MM-DD"
           @keyup="updateInput('on', $event.target.value)"
           v-bind:value="input.on"
    />
    <input type="text"
           placeholder="Exchange Value"
           v-bind:value="input.exchange.toFixed(2)"
           readonly
    />

    <button @click="removeInput()">Remove</button>
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  props: ['index'],
  methods: {
    removeInput(){
      this.$store.commit('deleteInput', this.index);
    },
    updateInput(key, value) {
      this.$store.commit('updateInput', {
        data: {
          exchange: 0,
          [key]: value
        },
        index: this.index
      })
    }
  },
  computed: {
    input () {
      return this.$store.getters.getInput(this.index);
    }
  }
}
</script>

<style scoped>
.input-wrapper {
  margin-bottom: 10px;
}

input {
  margin-right: 15px;
}
</style>
