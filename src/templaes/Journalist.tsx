import journalist_data from "../journalist.json";

const Journalist = () => {
  const journalist = journalist_data[0];

  return (
    <div className="journalist-page">
    <img src={journalist.image}></img>
        <h3>Journalist of the month</h3>
      <h2>{journalist.name}</h2>
      <div
        className="journalist-content"
        dangerouslySetInnerHTML={{ __html: journalist.content }}
      />
    </div>
  );
};

export default Journalist;