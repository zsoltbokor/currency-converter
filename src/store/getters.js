export default {
    getInputs: (state) => state.inputs,
    getRates: (state) => state.rates,
    ratesByDay: state => day => state.rates.find(byDay => byDay.date === day),
    getInput: (state) => index => state.inputs[index],
    getCurrencies: (state) => state.currency,
    getTotalOfTargetCurrency: (state) => {
        let sum = 0;
        state.inputs.forEach(input => sum += input.exchange);
        return sum;
    }
}
