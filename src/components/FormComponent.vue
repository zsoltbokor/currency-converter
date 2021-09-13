<template>
  <div id="form">
    <div class="selector">
      <label>Select source currency:</label>
      <select @change="selectFromCurrency($event.target.value)">
        <option v-bind:value="-1">Select</option>
        <option v-for="(currency, index) of currencies" v-bind:key="'from-' + index" v-bind:value="currency">{{ currency }}
        </option>
      </select>
      <label class="error" v-if="showSourceCurrencyError">Select a value</label>
      <br/>
      <label>Select target currency:</label>
      <select @change="selectToCurrency($event.target.value)">
        <option v-bind:value="-1">Select</option>
        <option v-for="(currency, index) of currencies" v-bind:key="'to-' + index" v-bind:value="currency">{{ currency }}
        </option>
      </select>
      <label class="error" v-if="showTargetCurrencyError">Select a value</label>
    </div>

    <hr />

    <button v-if="ftc.to != null && ftc.from != null" v-on:click="addNewInput">Add new entry</button>

    <hr />

    <InputComponent v-for="(_, index) of inputs" v-bind:key="index" :index="index" />

    <div v-if="ftc.to != null">
      <hr />
      <p><span>Total: </span> {{total.toFixed(2)}} in {{ftc.to}}</p>
      <hr />
    </div>

    <button v-if="ftc.to != null && ftc.from != null" v-on:click="convert()">Convert</button>
    <button v-on:click="reset()">Reset</button>
  </div>
</template>

<script>
import {getCurrencies} from "@/utils/data-utils";
import {mapGetters} from 'vuex'

import InputComponent from './InputComponent.vue'

export default {
  name: 'FormComponent',
  data: () => {
    return {
      currencies: getCurrencies(),
      showSourceCurrencyError: false,
      showTargetCurrencyError: false,
    }
  },
  methods: {
    selectFromCurrency(value){
      this.showSourceCurrencyError = value === "-1";
      this.$store.commit('setFromCurrency', value === "-1" ? null : value);
    },
    selectToCurrency(value){
      this.showTargetCurrencyError = value === "-1";
      this.$store.commit('setToCurrency', value === "-1" ? null : value);
    },
    addNewInput(){
      this.$store.commit('addInput', {});
    },
    convert() {
      this.$store.dispatch('convert');
    },
    reset() {
      this.$store.commit('reset');
    }
  },
  computed: mapGetters({
    inputs: 'getInputs',
    ftc: 'getCurrencies',
    total: 'getTotalOfTargetCurrency'
  }),
  components: {
    InputComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#form {
  width: 620px;
  margin: 0 auto;
  min-height: 100px;
  background: #eee;
  text-align: left;
  padding: 10px;
}

label {
  margin-right: 15px;
}

select {
  width: 150px;
}
button {
  margin-right: 10px;
}

.error {
  margin-left: 10px;
  color: red;
}
</style>
