
import { Link } from 'react-router-dom';
import articles from '../articles.json';


export default function Article() {

  const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');

  return (
    <main className="articles">

     <div className="articles-wrapper">
      {articles.map((article, index) => {
        const slug = slugify(article.title);
        return (
          <Link to={`/articles/${slug}`} key={index} className="articles-preview-link">
            <div style={{ backgroundImage: `url(${article.image})` }} className='image' ></div>
            <div
              className="articles-preview"
            >
              <div className="overlay">
                <h2>{article.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: article.content.split('</p')[0] }}></p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  
    </main>
  );
}
