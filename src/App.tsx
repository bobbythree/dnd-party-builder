import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

import HomePage from "./pages/HomePage.tsx"
import MainLayout from "./layouts/MainLayout.tsx";
import AddCharacterPage from "./pages/AddCharacterPage.tsx";
import MyParty from "./pages/MyParty.tsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/add-character" element={<AddCharacterPage />} />
      <Route path="/my-party" element={<MyParty />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}

