export const color = (ParentComponent) => {
  //ParentComponent --> Component ban đầu
  const Component = (props) => {
    //Component --> mới được tạo ra
    // xử lí logic ở đây
    function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    return (
      <div className="color" style={{ color: getRandomColor() }}>
        <ParentComponent {...props} />
      </div>
    ); // Trả về component ban đầu
  };
  return Component;
};
