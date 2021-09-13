export default {
    convert: async ({state, commit}) => {
        const {inputs, rates, currency} = state;
        const missingDates = [];

        inputs.forEach(inp => {
            if (!(inp.on in rates) && !missingDates.includes(inp.on)) {
                missingDates.push(inp.on);
            }
        });

        if (missingDates.length) {
            const ratesResponse = await Promise.all(missingDates.map(async date => {
                const response = await fetch(`https://data.fixer.io/api/${date}?access_key=${process.env.VUE_APP_API_KEY}&format=1`);
                return await response.json();
            }));

            ratesResponse.forEach(resp => {
                commit('storeRates', resp);
            })
        }

        inputs.forEach((input, index) => {
            commit('updateInput', {
                data: {
                    exchange: (parseInt(input.value) / rates[input.on][input.currency]) * rates[input.on][currency.to]
                },
                index
            })
        });
    }
}
