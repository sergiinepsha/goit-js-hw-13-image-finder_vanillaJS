const baseUrl = 'https://pixabay.com/api/';
const API_KEY = '16584185-becffeb431a7890e96541401f';

/*
 * Object responsible for the logic of HTTP requests to the API
 */
export default {
  total: 0,
  page: 1,
  perPage: 12,
  searchQuery: '',
  async getImages() {
    const requestParams = `?image_type=photo&q=${this.searchQuery}&page=${this.page}&per_page=${this.perPage}&key=${API_KEY}`;
    try {
      return await fetch(baseUrl + requestParams).then(responce => {
        const queryResult = responce.json();
        this.incrementPage();
        return queryResult;
      });
    } catch (error) {
      throw error;
    }
  },

  getTotal() {
    return this.total;
  },

  setTotal(numb) {
    this.total = numb;
  },

  getPerPage() {
    return this.perPage;
  },

  setPerPage(str) {
    this.perPage = str;
  },

  getSearchQuery() {
    return this.searchQuery;
  },

  setSearchQuery(str) {
    this.searchQuery = str;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};
