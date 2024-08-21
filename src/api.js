// src/api.js
import axios from 'axios';

export const fetchQuestions = async (category, amount) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&type=multiple`;
    const response = await axios.get(url);
    return response.data.results;
};

export const fetchCategories = async () => {
    const url = `https://opentdb.com/api_category.php`;
    const response = await axios.get(url);
    return response.data.trivia_categories;
};
