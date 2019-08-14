import createStore from "unistore";

export const store = createStore({
  username: "abc",
  email: "",
  status: "",
  searchInput: "",
  articles: []
});

export const actions = () => ({
  setNama(state, name) {
    return { username: name };
  },
  setEmail(state, em) {
    return { email: em };
  },
  setStatus(state, stat) {
    return { status: stat };
  },
  setSearchInput(state, keyword) {
    return { searchInput: keyword };
  },
  setArticle(state, list) {
    return { articles: list };
  }
});
