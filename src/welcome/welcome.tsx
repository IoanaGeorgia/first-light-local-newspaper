import newsData from "../newData.json";
import { Link, useNavigate } from "react-router-dom";

import zara from "../assets/brands/Zara.png";
import cartier from "../assets/brands/Cartier.png";
import coach from "../assets/brands/Coach.png";
import disney from "../assets/brands/disney.png";
import gucci from "../assets/brands/Gucci.png";
import loreal from "../assets/brands/Lorean.png";

import journalist_data from "../journalist.json";
import interview_home from "../interview_home.json";

import articles from "../articles.json";

export default function Welcome() {
  const navigate = useNavigate();

  const firstFourArticles = articles.slice(0, 4);

  const group1 = firstFourArticles.slice(0, 2);
  const group2 = firstFourArticles.slice(2, 4);
  const group3 = firstFourArticles.slice(4, 6);

  const handleSeeAll = () => {
    navigate("/articles");
    window.scrollTo(0, 0);
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonth = monthNames[new Date().getMonth() + 1];
  const journalist_of_the_month = journalist_data[0].name ?? "";
  const journalist_of_the_month_image = journalist_data[0].image ?? "";

  const interview_title = interview_home[0]?.title ?? "";
  const interview_lead = interview_home[0]?.lead ?? "";
  const interview_image = interview_home[0]?.image ?? "";

  const slugify = (text: any) =>
    text
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");

  const interview_slug = slugify(interview_home[0]?.title) ?? "";

  return (
    <main className="welcome">
      <div className="hero-image" role="img"></div>

      <div className="defaultBannerWrapper">
        <div className="defaultBanner">
          <div>
            <img alt="Cartier" src={cartier}></img>
          </div>
          <div>
            <img alt="Zara" src={zara}></img>
          </div>
          <div>
            <img alt="L'oreal" src={loreal}></img>
          </div>
          <div>
            <img alt="Coach" src={coach}></img>
          </div>
          <div>
            <img alt="Gucci" src={gucci}></img>
          </div>
          <div>
            <img alt="disney" src={disney}></img>
          </div>
        </div>
      </div>
      <div className="show-articles">
        <button
          className="see-all-button"
          onClick={handleSeeAll}
          aria-label="see all articles"
        >
          See All Articles
        </button>
      </div>

      <div className="selection">
        {group1.map((article, index) => {
          const slug = slugify(article.title);
          return (
            <Link
              key={article.title || index}
              to={`/articles/${slug}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Learn more about ${article.title}`}
            >
              <div className={`article article${index + 1}`}>
                <p>{article.title}</p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="selection">
        {group2.map((article, index) => {
          const slug = slugify(article.title);
          return (
            <Link
              key={article.title || index + 2}
              to={`/articles/${slug}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Learn more about ${article.title}`}
            >
              <div className={`article article${index + 3}`}>
                <p>{article.title}</p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="interview">
        <div className="title">
          <p>{interview_title}</p>
        </div>
        <Link
          to={`/interview/${interview_slug}`}
          aria-label={`Learn more about ${interview_title}`}
        >
          <div
            className="interview-cover"
            style={{ backgroundImage: `url(${interview_image})` }}
          >
            <p>{interview_lead}</p>
          </div>
        </Link>
      </div>

      <div className="show-articles">
        <button
          className="see-all-button"
          onClick={handleSeeAll}
          aria-label="See all articles"
        >
          See All Articles
        </button>
      </div>

      <div className="journalist-of-the-day">
        <Link
          to={`/journalist`}
          aria-label={`Learn more about ${journalist_of_the_month}`}
        >
          <div className="normal-card journalist-card">
            MEET the journalist of {currentMonth}: {journalist_of_the_month}
          </div>
        </Link>
        <img src={journalist_of_the_month_image}></img>
      </div>

      <div className="selection">
        {group3.map((article, index) => {
          const slug = slugify(article.title);
          return (
            <Link
              key={article.title || index + 2}
              to={`/articles/${slug}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Learn more about ${article.title}`}
            >
              <div className={`article article${index + 3}`}>
                <p>{article.title}</p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="show-articles">
        <button
          className="see-all-button"
          onClick={handleSeeAll}
          aria-label="See all articles"
        >
          See All Articles
        </button>
      </div>

      <div className="news-important">
        {newsData.map((item) => {
          const slug = slugify(item.title);
          return (
            <div className="news-wrapper" key={slug}>
              <p>{item.title}</p>
              <p>{item.lead}</p>
              <Link
                to={`/news/${slug}`}
                aria-label={`Learn more about ${item.title}`}
              >
                Learn more
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
