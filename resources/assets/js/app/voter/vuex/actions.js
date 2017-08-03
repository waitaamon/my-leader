
export const voterDetails = (({ dispatch }, { payload, context}) => {

    return axios.post('/api/getvoterdetails/' + payload.id, payload).then( (response) => {

        //dispach get voter details

        console.log('get voter details')

    }).catch((error) => {
        context.errors = error.response.data.errors
    })
})