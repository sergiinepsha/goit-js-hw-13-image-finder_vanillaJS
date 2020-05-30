'use strict';

import apiService from '../api/apiService';
import executingRequest from '../executingRequest';
import clearingPageOnRequest from '../clearing/clearingPageOnRequest';

/*
 * Reading query, saving it in the apiService and running the query
 */
export default function (e) {
  e.preventDefault();
  clearingPageOnRequest();
  const elements = e.currentTarget.elements;
  addSearchQuery(elements);
  addQuantityElements(elements);
  executingRequest();
}

function addSearchQuery(elements) {
  const input = elements.query;
  const searchQuery = input.value;

  apiService.setSearchQuery(searchQuery);

  input.value = '';
}

function addQuantityElements(elements) {
  const select = elements.list1;
  const quantityElements = select.value;

  apiService.setPerPage(quantityElements);
}
