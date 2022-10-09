const Galery = (props) => {
  const { photographer, src } = props;
  console.log(src);
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={src} alt={photographer} />
      </div>
      <div className="info">
        <p>{photographer}</p>
      </div>
    </div>
  );
};

export default Galery;
