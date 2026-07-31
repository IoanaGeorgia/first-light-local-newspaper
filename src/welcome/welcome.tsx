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
        <a
          target="_blank"
          href="http://localhost:5173/articles/why-did-the-city-museum-have-to-cancel-its-exhibit"
          aria-label="Learn more about Why did the City Museum have to cancel it's exhibit?"
        >
          <div className="article article1">
            <p>Why did the City Museum have to cancel it's exhibit?</p>
          </div>
        </a>
        <a
          target="_blank"
          href="http://localhost:5173/articles/petra-jones-interview-the-inner-workings-of-a-fantasy"
          aria-label="Learn more about Petra Jones interview: The inner workings of a fantasy"
        >
          <div className="article article2">
            <p>Petra Jones interview: The inner workings of a fantasy</p>
          </div>
        </a>
      </div>

      <div className="selection">
        <a
          target="_blank"
          href="http://localhost:5173/articles/restaurating-the-kasa-castle-works-begin"
          aria-label="Learn more about Restaurating the Kasa castle: works begin"
        >
          <div className="article article3">
            <p>Restaurating the Kasa castle: works begin</p>
          </div>
        </a>

        <a
          target="_blank"
          href="http://localhost:5173/articles/thousands-of-people-prepare-for-the-city-footbal-friendly-competition"
          aria-label="Learn more about  Thousands of people prepare for the city footbal friendly competition"
        >
          <div className="article article4">
            <p>
              Thousands of people prepare for the city footbal friendly
              competition
            </p>
          </div>
        </a>
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
        <a
          target="_blank"
          href="http://localhost:5173/articles/summer-exhibition-end"
          aria-label="Learn more about the Summer Exhibition end"
        >
          <div className="article article5">
            <p>Summer Exhibition end</p>
          </div>
        </a>
        <a
          target="_blank"
          href="http://localhost:5173/articles/eduline-a-magazine-dedicated-to-seniors"
          aria-label="Learn more about Eduline, a magazine dedicated to seniors"
        >
          {" "}
          <div className="article article6">
            <p>'Eduline', a magazine dedicated to seniors</p>
          </div>
        </a>
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
