import { useParams } from "react-router-dom";
import articleData from "../articles.json"; 

const slugify = (text:any) => 
  text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');

const ArticleTemplate = () => {
  const { slug } = useParams();

  const article = articleData.find(item => slugify(item.title) === slug);

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <div className="article-template-wrapper">
      <div style={{ backgroundImage: `url(${article.image})` }} className='image' ></div>
      <h2>{article.title}</h2>
      <div className="content" dangerouslySetInnerHTML={{ __html: article.content }}></div>
    </div>
  );
};

export default ArticleTemplate;
