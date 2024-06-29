// // import React, { useEffect, useState } from 'react';
// // import Pagination from '@mui/material/Pagination';
// // import { Box, Stack, Typography } from '@mui/material';

// // import { exerciseOptions, fetchData } from '../utils/fetchData';
// // import ExerciseCard from './ExerciseCard';
// // import Loader from './Loader';

// // const Exercises = ({ exercises, setExercises, bodyPart }) => {
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [exercisesPerPage] = useState(6);

// //   useEffect(() => {
// //     const fetchExercisesData = async () => {
// //       let exercisesData = [];

// //       if (bodyPart === 'all') {
// //         exercisesData = await fetchData(
// //           'https://exercisedb.p.rapidapi.com/exercises',
// //           exerciseOptions
// //         );
// //       } else {
// //         exercisesData = await fetchData(
// //           `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
// //           exerciseOptions
// //         );
// //       }

// //       setExercises(exercisesData);
// //     };

// //     fetchExercisesData();
// //   }, [bodyPart, setExercises]);

// //   // Pagination
// //   const indexOfLastExercise = currentPage * exercisesPerPage;
// //   const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
// //   const currentExercises = Array.isArray(exercises)
// //     ? exercises.slice(indexOfFirstExercise, indexOfLastExercise)
// //     : [];

// //   const paginate = (event, value) => {
// //     setCurrentPage(value);

// //     window.scrollTo({ top: 1800, behavior: 'smooth' });
// //   };

// //   if (!currentExercises.length) return <Loader />;

// //   return (
// //     <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
// //       <Typography
// //         variant="h4"
// //         fontWeight="bold"
// //         sx={{ fontSize: { lg: '44px', xs: '30px' } }}
// //         mb="46px"
// //       >
// //         Showing Results
// //       </Typography>
// //       <Stack
// //         direction="row"
// //         sx={{ gap: { lg: '107px', xs: '50px' } }}
// //         flexWrap="wrap"
// //         justifyContent="center"
// //       >
// //         {currentExercises.map((exercise, idx) => (
// //           <ExerciseCard key={idx} exercise={exercise} />
// //         ))}
// //       </Stack>
// //       <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
// //         {exercises.length > exercisesPerPage && (
// //           <Pagination
// //             color="standard"
// //             shape="rounded"
// //             defaultPage={1}
// //             count={Math.ceil(exercises.length / exercisesPerPage)}
// //             page={currentPage}
// //             onChange={paginate}
// //             size="large"
// //           />
// //         )}
// //       </Stack>
// //     </Box>
// //   );
// // };

// // export default Exercises;
// import React, { useEffect, useState } from 'react';
// import Pagination from '@mui/material/Pagination';
// import { Box, Stack, Typography } from '@mui/material';

// import { exerciseOptions, fetchData } from '../utils/fetchData';
// import ExerciseCard from './ExerciseCard';
// import Loader from './Loader';

// const Exercises = ({ exercises, setExercises, bodyPart }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [exercisesPerPage] = useState(6);

//   useEffect(() => {
//     // const fetchExercisesData = async () => {
//     //   try {
//     //     let exercisesData = [];

//     //     if (bodyPart === 'all') {
//     //       exercisesData = await fetchData(
//     //         'https://exercisedb.p.rapidapi.com/exercises',
//     //         exerciseOptions
//     //       );
//     //     } else {
//     //       exercisesData = await fetchData(
//     //         `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
//     //         exerciseOptions
//     //       );
//     //     }

//     //     if (Array.isArray(exercisesData)) {
//     //       setExercises(exercisesData);
//     //     } else {
//     //       console.error('Fetched data is not an array:', exercisesData);
//     //     }
//     //   } catch (error) {
//     //     console.error('Error fetching exercises data:', error);
//     //   }
//     // };

//     // fetchExercisesData();
//     try{

//     } catch(error){
//       console.error('Error fetching exercises data:', error);
//     }
//   }, [bodyPart, setExercises]);

//   // Pagination
//   const indexOfLastExercise = currentPage * exercisesPerPage;
//   const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
//   const currentExercises = Array.isArray(exercises)
//     ? exercises.slice(indexOfFirstExercise, indexOfLastExercise)
//     : [];

//   const paginate = (event, value) => {
//     setCurrentPage(value);
//     window.scrollTo({ top: 1800, behavior: 'smooth' });
//   };

//   if (!currentExercises.length) return <Loader />;

//   return (
//     <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
//       <Typography
//         variant="h4"
//         fontWeight="bold"
//         sx={{ fontSize: { lg: '44px', xs: '30px' } }}
//         mb="46px"
//       >
//         Showing Results
//       </Typography>
//       <Stack
//         direction="row"
//         sx={{ gap: { lg: '107px', xs: '50px' } }}
//         flexWrap="wrap"
//         justifyContent="center"
//       >
//         {currentExercises.map((exercise, idx) => (
//           <ExerciseCard key={idx} exercise={exercise} />
//         ))}
//       </Stack>
//       <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
//         {exercises.length > exercisesPerPage && (
//           <Pagination
//             color="standard"
//             shape="rounded"
//             defaultPage={1}
//             count={Math.ceil(exercises.length / exercisesPerPage)}
//             page={currentPage}
//             onChange={paginate}
//             size="large"
//           />
//         )}
//       </Stack>
//     </Box>
//   );
// };

// export default Exercises;
//code-2-----------------------------------------------------
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Pagination from '@mui/material/Pagination';
// import { Box, Stack, Typography } from '@mui/material';

// import ExerciseCard from './ExerciseCard';
// import Loader from './Loader';

// const Exercises = ({ exercises, setExercises, bodyPart }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [exercisesPerPage] = useState(6);

//   useEffect(() => {
//     const fetchRecipesData = async () => {
//       const options = {
//         method: 'GET',
//         url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
//         params: {
//           query: 'side salad',
//           diet: 'vegetarian',
//           intolerances: 'gluten',
//           includeIngredients: 'cheese,nuts',
//           excludeIngredients: 'eggs',
//           instructionsRequired: 'true',
//           fillIngredients: 'false',
//           addRecipeInformation: 'false',
//           addRecipeInstructions: 'false',
//           addRecipeNutrition: 'false',
//           maxReadyTime: '45',
//           ignorePantry: 'true',
//           sort: 'max-used-ingredients',
//           offset: '0',
//           number: '10',
//           limitLicense: 'true'
//         },
//         headers: {
//           'x-rapidapi-key': 'ff208bbf45mshaa6b8e57de208f3p1a6c19jsnc4be9a21ae81',
//           'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//         }
//       };

//       try {
//         const response = await axios.request(options);
//         const recipesData = response.data.results;
//         setExercises(recipesData);
//       } catch (error) {
//         console.error('Error fetching recipes data:', error);
//       }
//     };

//     fetchRecipesData();
//   }, [setExercises]);

//   // Pagination
//   const indexOfLastExercise = currentPage * exercisesPerPage;
//   const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
//   const currentExercises = Array.isArray(exercises)
//     ? exercises.slice(indexOfFirstExercise, indexOfLastExercise)
//     : [];

//   const paginate = (event, value) => {
//     setCurrentPage(value);
//     window.scrollTo({ top: 1800, behavior: 'smooth' });
//   };

//   if (!currentExercises.length) return <Loader />;

//   return (
//     <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
//       <Typography
//         variant="h4"
//         fontWeight="bold"
//         sx={{ fontSize: { lg: '44px', xs: '30px' } }}
//         mb="46px"
//       >
//         Showing Results
//       </Typography>
//       <Stack
//         direction="row"
//         sx={{ gap: { lg: '107px', xs: '50px' } }}
//         flexWrap="wrap"
//         justifyContent="center"
//       >
//         {currentExercises.map((exercise, idx) => (
//           <ExerciseCard key={idx} exercise={exercise} />
//         ))}
//       </Stack>
//       <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
//         {exercises.length > exercisesPerPage && (
//           <Pagination
//             color="standard"
//             shape="rounded"
//             defaultPage={1}
//             count={Math.ceil(exercises.length / exercisesPerPage)}
//             page={currentPage}
//             onChange={paginate}
//             size="large"
//           />
//         )}
//       </Stack>
//     </Box>
//   );
// };

// export default Exercises;
//code-3-------------------------
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography, TextField, Button } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  useEffect(() => {
    fetchRecipesData(); // Fetch data on component mount
  }, []);

  const fetchRecipesData = async (query = 'side salad') => {
    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
      params: {
        query: query,
        diet: 'vegetarian',
        intolerances: 'gluten',
        includeIngredients: 'cheese,nuts',
        excludeIngredients: 'eggs',
        instructionsRequired: 'true',
        fillIngredients: 'false',
        addRecipeInformation: 'false',
        addRecipeInstructions: 'false',
        addRecipeNutrition: 'false',
        maxReadyTime: '45',
        ignorePantry: 'true',
        sort: 'max-used-ingredients',
        offset: '0',
        number: '10',
        limitLicense: 'true'
      },
      headers: {
        'x-rapidapi-key': 'ff208bbf45mshaa6b8e57de208f3p1a6c19jsnc4be9a21ae81',
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      const recipesData = response.data.results;
      setExercises(recipesData);
    } catch (error) {
      console.error('Error fetching recipes data:', error);
    }
  };

  const handleSearch = () => {
    fetchRecipesData(searchQuery);
  };

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = Array.isArray(exercises)
    ? exercises.slice(indexOfFirstExercise, indexOfLastExercise)
    : [];

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="46px"
      >
        Showing Results
      </Typography>
      <Box display="flex" justifyContent="center" mb="20px">
        <TextField
          label="Search Exercises"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ mr: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Stack
        direction="row"
        sx={{ gap: { lg: '107px', xs: '50px' } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;

