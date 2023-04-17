import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// Components
import Pokemon, { pokemonLoader } from './routes/Pokemon';
import Root, { rootLoader } from './routes/Root';
import Error from './routes/Error';

 const App = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />} path='/' loader={rootLoader} errorElement={<Error />}>
      <Route element={<Pokemon />} loader={pokemonLoader} path='pokemon/:name' />
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: 'pokemon/:name',
//         element: <Pokemon />,
//         errorElement: <Error />
//       }
//     ]
//   }
// ]);


export default App;