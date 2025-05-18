import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import AppLayout from "../page/AppLayout.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import FriendCollection from "../page/friend/FriendCollection.tsx";
import FriendCreateForm from "../component/friend/FriendCreateForm.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<App />} />
          <Route
            path="/friend"
            element={<FriendCollection></FriendCollection>}
          />
          <Route
            path="/friend/new"
            element={<FriendCreateForm></FriendCreateForm>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
