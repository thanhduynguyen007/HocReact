const Posts = ({ onGetData }) => {
  return (
    <div>
      <button onClick={() => onGetData("Hello")}>Click Me</button>
    </div>
  );
};
export default Posts;
