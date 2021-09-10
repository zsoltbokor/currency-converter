import {format} from 'date-fns'

export default {
    storeRates: (state, payload) => {
        state.rates[payload.date] = payload.rates;
    },
    addInput: (state) => {
        state.inputs = [
            ...state.inputs,
            {
                value: null,
                on: format(new Date(), 'yyyy-MM-dd'),
                exchange: 0
            }
        ]
    },
    deleteInput: (state, inputIndex) => {
        state.inputs.splice(inputIndex, 1);
    },
    updateInput: (state, payload) => {
        const {data, index} = payload;
        const tmp = [...state.inputs];

        tmp[index] = {
            ...tmp[index],
            ...data
        };

        state.inputs = tmp;
    },
    setFromCurrency: (state, selection) => {
        state.currency.from = selection;
    },
    setToCurrency: (state, selection) => {
        state.currency.to = selection;
    },

    reset: (state) => {
        state.inputs = [];
        state.currency = {
            from: null,
            to: null
        }
    }
}
