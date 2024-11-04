import { Navigate, Outlet } from "react-router-dom";
// Example authentication function
const isAuthenticated = () => {
  // Replace this with your actual authentication logic
  return localStorage.getItem("JSteamMember") ? true : false;
};
function Private() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/JSlogin" />;
}
export default Private;
