import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ReactQueryProvider from "./features/providers/ReactQueryProvider";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import ProtectedRoute from "./components/ProtectedRoute";
import Applayout from "./Applayout";
import PropertyListing from "./pages/PropertyListing";
import Bookings from "./pages/Bookings";
import User from "./pages/User";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <ReactQueryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Applayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="propertyListing" />} />
            <Route path="propertyListing" element={<PropertyListing />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="user" element={<User />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          margin: "8px",
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "#374151",
          },
        }}
      />
    </ReactQueryProvider>
  );
}
