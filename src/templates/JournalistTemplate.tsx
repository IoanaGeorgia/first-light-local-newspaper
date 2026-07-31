import journalist_data from "../journalist.json";

const JournalistTemplate = () => {
  const journalist = journalist_data[0];

  return (
    <div className="journalist-page">
      <img src={journalist.image} alt="journalist.name"></img>
      <h3>Journalist of the month</h3>
      <h2>{journalist.name}</h2>
      <div
        className="journalist-content"
        dangerouslySetInnerHTML={{ __html: journalist.content }}
      />
    </div>
  );
};

export default JournalistTemplate;
