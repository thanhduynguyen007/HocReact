import React, { useContext } from "react";
import { MyContext } from "../App01";

const Content = () => {
  //   const context = useContext(MyContext);
  //   console.log(context);
  const { state } = useContext(MyContext);

  return (
    // Nếu không dùng useContext
    // <MyContext.Consumer>
    //   {(context) => {
    //     console.log(context); // log ra light
    //     return (
    //       <div className="content">
    //         <p>
    //           Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    //           Asperiores quia cum aliquid. Et delectus quaerat quam dolore,
    //           ullam nobis, non eos temporibus ducimus, libero deleniti facere
    //           eveniet qui hic veniam.
    //         </p>
    //       </div>
    //     );
    //   }}
    // </MyContext.Consumer>

    // Nếu dùng useContext
    <div className="content">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        quia cum aliquid. Et delectus quaerat quam dolore, ullam nobis, non eos
        temporibus ducimus, libero deleniti facere eveniet qui hic veniam.
      </p>
      <h3>Đang dùng theme: {state.theme}</h3>
    </div>
  );
};

export default Content;
