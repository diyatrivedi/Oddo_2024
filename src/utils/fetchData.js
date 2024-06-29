export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
  params: { limit: '10' },
  headers: {
    'X-RapidAPI-Key': '7de97e7dc0mshcab0fe210970073p1b9c94jsnb0e329f3addb',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
