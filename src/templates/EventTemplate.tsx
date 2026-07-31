import { useParams } from "react-router-dom";
import newsData from "../newData.json";

const slugify = (text: any) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "");

const EventTemplate = () => {
  const { slug } = useParams();

  const article = newsData.find((item) => slugify(item.title) === slug);

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <div className="event-template-wrapper">
      <h2>{article.title}</h2>
      <p className="lead">
        <em>{article.lead}</em>
      </p>

      <div>{article.content}</div>
      <p className="date">{article.date}</p>
    </div>
  );
};

export default EventTemplate;
