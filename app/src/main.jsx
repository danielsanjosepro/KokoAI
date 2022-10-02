import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import { createStore, StoreProvider, action } from "easy-peasy";
import Home from "./screens/Home";
import "./index.css";
import ImagesList from "./components/ImagesList";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Details from "./components/Details";

const store = createStore({
  tasks: {
    items: [],
    currentItem: null,
    setCurrentItem: action((state, item) => {
      state.currentItem = item;
    }),
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/list",
    element: (
      <>
        <ImagesList /> <NavBar />
      </>
    ),
  },
  {
    path: "/details",
    element: (
      <>
        <Details /> <NavBar />
      </>
    ),
  },
]);

const MainWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 800px;
  background-color: white;
  border: 20px solid gray;
  border-radius: 15px;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainWrapper>
      <StoreProvider store={store}>
        <Banner />
        <RouterProvider router={router} />
      </StoreProvider>
    </MainWrapper>
  </React.StrictMode>
);
