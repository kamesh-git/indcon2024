import { Routes, Route, useParams, Link } from "react-router-dom";

function Default({msg}) {
  return (
    <div className="App">
      <h1>Hello CodeSandbox {msg}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
function ProfilePage() {
  // Get the userId param from the URL.
  let { userId } = useParams();
  return <Link to={`/test/${userId + 'k'}`}>{  userId  } th</Link>;
}

export default function Test() {
  return (
    <Routes>
      <Route path="/:userId" element={<ProfilePage />} />
      <Route path="/" element={<ProfilePage />} />
    </Routes>
  );
}
