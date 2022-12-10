import api from "../../services/api";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    api.get("/user");
  });
  return <p>Home</p>;
};

export default Home;
