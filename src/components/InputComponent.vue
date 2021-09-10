<template>
  <div class="input-wrapper">
    <input type="text"
           placeholder="Source value"
           @keyup="updateInput('value', $event.target.value)"
           v-bind:value="input.value"
    />
    <datepicker
        :format="format"
        :disabled-dates="disabledDates"
        :placeholder="placeholder"
        :wrapper-class="wrapperClass"
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
import Datepicker from 'vuejs-datepicker';

export default {
  name: 'InputComponent',
  props: ['index'],
  data: () => {
    return {
      format: 'yyyy-MM-dd',
      disabledDates: {
        from: new Date()
      },
      placeholder: 'Select date',
      wrapperClass: 'picker-wrapper',
    }
  },
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
  },
  components: {
    Datepicker
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

.picker-wrapper {
  display: inline;
}

.picker-wrapper >>> div {
  display: inline;
}
</style>
