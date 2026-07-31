import { useParams } from "react-router-dom";
import interviews from "../interview_home.json";

const slugify = (text: any) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "");

const InterviewTemplate = () => {
  const { slug } = useParams();

  const interview = interviews.find((item) => slugify(item.title) === slug);

  if (!interview) {
    return <div>Article not found.</div>;
  }

  return (
    <div className="article-template-wrapper">
      <div
        style={{ backgroundImage: `url(${interview.image})` }}
        className="image"
      ></div>
      <h2>{interview.title}</h2>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: interview.content }}
      ></div>
    </div>
  );
};

export default InterviewTemplate;
