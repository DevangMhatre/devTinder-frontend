import { BrowserRouter, Routes, Route } from "react-router";

import Body from "./components/Body";
import Feed from "./components/Feed";
import Login from "./components/Login/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          {/* Parent Route */}
          <Route path="/" element={<Body />}>
            {/* Children Route which requires OUTLET for rendering children routes */}
            <Route path="/feed" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
