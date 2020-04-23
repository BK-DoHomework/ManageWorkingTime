export const state = () => ({
  titles: []
});

export const mutations = {
  SET_TITLES: (state, payload) => {
    state.titles = payload;
  }
};
