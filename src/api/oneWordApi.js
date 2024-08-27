import axios from 'axios';

export const fetchOneWordQuestions = async (amount) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&type=multiple&difficulty=medium&encode=url3986`; // Modify this URL as needed
    const response = await axios.get(url);
    return response.data.results.map(question => ({
        ...question,
        correct_answer: question.correct_answer.split(' ')[0] // Extracting the first word for simplicity
    }));
};
