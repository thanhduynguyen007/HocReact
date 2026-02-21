import React, { useState } from "react";
import Theme from "./components/Theme";
export const MyContext = React.createContext();
// console.log(MyContext); // trả về một object component

const App = () => {
  const [state, setState] = useState({
    theme: "light",
  });
  const setTheme = (theme) => {
    setState({ ...state, theme });
  };
  return (
    <MyContext.Provider value={{ state, setTheme }}>
      {/* gửi value và tất cả các component bên trong MyContext.Provider đều truy
      cập được */}
      <Theme />
    </MyContext.Provider>
  );
};

export default App;
/* 
  App 
    - Theme
      - Toggle
      - Content

1. Đối tượng context
2. Provider
3. Consumer
*/
