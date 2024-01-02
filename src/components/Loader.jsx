import "./loader.css";
import { useSelector } from "react-redux";
const Loader = () => {
  const { showloader } = useSelector((state) => state.loader);
  return (
    <>
      {showloader ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default Loader;
