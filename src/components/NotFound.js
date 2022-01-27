import "../styles/NotFound.scss";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1 className="notFound__text">El personaje que buscas no existe</h1>
      <span className="notFound__text--sad">
        <i className="fas fa-frown-open"></i>
      </span>
    </div>
  );
};
export default NotFound;
