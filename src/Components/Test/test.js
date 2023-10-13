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
  console.log("userI");
  return <Link to={`/test/users/${parseInt(userId) + 1}`}>{  userId  }</Link>;
}

export default function Test() {
  return (
    <Routes>
      <Route path="users" element>
        <Route path=":userId" element={<ProfilePage />} />
      </Route>
      <Route path="*" element={<Default />} />
    </Routes>
  );
}
