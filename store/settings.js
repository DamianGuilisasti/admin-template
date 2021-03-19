import Repository, { baseUrl } from '~/repositories/Repository';

export const state = () => ({
    settings: []
}); 

export const mutations = {
    setSettings(state, payload) {
        state.settings = payload;
    }
}

export const actions = {
    async getSettings({ commit }, payload) {
        const reponse = await Repository.get(
            `${baseUrl}/settings/list` //${baseUrl}/products?${serializeQuery(payload)}
        )
            .then(response => {
                console.log(response.data);
                commit('setSettings', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
}
