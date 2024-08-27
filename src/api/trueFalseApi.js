import axios from 'axios';

export const fetchTrueFalseQuestions = async (amount) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&type=boolean`;
    const response = await axios.get(url);
    return response.data.results;
};
