import { memo, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [username, setUsername] = useState("");

  const handleCheck = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        {
          username,
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Có lỗi xảy ra:", error);
      alert("Có lỗi xảy ra. Vui lòng thử lại!");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Tài khoản"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleCheck}>Check</button>
    </>
  );
};

export default HomePage;
