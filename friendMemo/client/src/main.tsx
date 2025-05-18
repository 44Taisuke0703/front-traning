import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import FriendCollection from "../page/FriendCollection.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/friend" element={<FriendCollection></FriendCollection>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
