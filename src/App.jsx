import { BrowserRouter, Routes, Route } from "react-router";

import Body from "./components/Body";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import SignUp_In from "./components/SignUp_In/SignUp_In";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          {/* Parent Route */}
          <Route path="/" element={<Body />}>
            {/* Children Route which requires OUTLET for rendering children routes */}
            <Route path="/" element={<Feed />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/login" element={<SignUp_In />} />
            <Route path="/signup" element={<SignUp_In />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requests" element={<Requests />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
