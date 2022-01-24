<template>
  <div class="calculator">
    <div class="display">{{current}}</div>    
    <div class="btn" v-on:click="append(9)">9</div>
    <div class="btn" v-on:click="append(8)">8</div>
    <div class="btn" v-on:click="append(7)">7</div>
    <div class="btn" v-on:click="append(6)">6</div>
    <div class="btn" v-on:click="append(5)">5</div>
    <div class="btn" v-on:click="append(4)">4</div>
    <div class="btn" v-on:click="append(3)">3</div>
    <div class="btn" v-on:click="append(2)">2</div>
    <div class="btn" v-on:click="append(1)">1</div>
    <div class="btn" v-on:click="append(0)">0</div>
    <div class="btn clear" v-on:click="clear()">C</div> 
    <div class="btn operator equal" v-on:click="results()">=</div>
    <div class="btn operator" v-for="(operation, index) in operators" :key="index" v-on:click="operatorClicked(operation.operator)">{{operation.add}} {{operation.rest}} {{operation.times}} {{operation.divide}}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      current: "0",
      previous: null,
      operators: [ {add: "+", operator: "sum"},
                         {rest: "-", operator: "subtraction"},
                         {times: "x", operator: "multiplication"},
                         {divide: "/", operator: "division"},],
    };
  },
  methods: {
    clear() {
      this.current = "0";
    },
    append(value) {
      if (
        this.current == "0" ||
        this.current == this.previous
      ) {
        this.current = "";
      }
      return (this.current += value);
    },
    results() {
      axios
        .get(
          `http://localhost:3000/${this.operator}/${this.previous}/${this.current}`
        )
        .then(response => {
            this.current = response.data;
          })
        .catch(error => {
          this.current = error.response.data;
        });
    },
    operatorClicked(operator) {
      this.operator = operator;
      this.previous = this.current;
    },
  }
};
</script>

<style>
.calculator {
  display: grid;
  font-size: 2rem;
  margin: 0 auto;
  text-align: center;
  width: 400px;
}
.btn {
  display: grid;
  background-color: #F2F2F2;
  border: 1px solid #000000;
}
.operator {
  background-color: #37ad28;
  color: #ffffff;
}
.display {
  background-color: #070707;
  color: #ffffff;
  display: grid;
  grid-column: 1/5;
  max-width: 400px;
  padding: auto 16px;
}
.clear {
  display: grid;
  grid-row: 2/6;
  background-color: #ad122c;
  align-items: center;
}
.equal {
  grid-column: 3/5;
}
</style>
