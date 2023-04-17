import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Await,
  Link,
  defer,
  useLoaderData
} from "react-router-dom";
import LoadingBar from "./loadingbar";



const Homepage = () => {
  const { results } = useLoaderData();
  const [state, setState] = useState({
    isAnimating: false,
    key: 0,
  })
  // Render the data when it is available
  return (
    <React.Suspense fallback={<LoadingBar state={state}/>}>
      <Await resolve={results} errorElement={<p>Error loading data</p>}>
        {(results) => {
          console.log("results", results);
          return (
            <>
              <h1>Test Page</h1>
              <h2>Hello</h2>
              <Link to="/">Home</Link>
            </>
          );
        }}
      </Await>
    </React.Suspense>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <h1>Home</h1>
        <Link to="/test">Test</Link>
      </>
    )
  },
  {
    path: "/test",
    element: <Homepage />,
    loader: ({ request, params }) => {
      const results = fetch("https://api.rapidmock.com/mocks/j4CMM", {
        headers: {
          "x-rapidmock-delay": 2500
        }
      }).then((response) => response.json());

      return defer({ results });
    }
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
