import newsData from '../newData.json'
import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import journalist_data from "../journalist.json";


export default function Welcome() {

    const navigate = useNavigate();

  const handleSeeAll = () => {
    navigate('/articles');
     window.scrollTo(0, 0);
  };


  
    const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

    const currentMonth = monthNames[new Date().getMonth()];
    const journalist_of_the_month = journalist_data[0].name ?? "";
       const journalist_of_the_month_image = journalist_data[0].image ?? "";

    const slugify = (text:any) =>
  text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');

  return (
    <main className="welcome">

    <div className="hero-image"></div>

     <div className="defaultBanner">

      <img src="https://banner2.cleanpng.com/20180613/krl/aa71flmdt.webp"></img>
      <img src="https://banner2.cleanpng.com/20180706/bug/aaxx9s5bu.webp"></img>
      <img src="https://banner2.cleanpng.com/20180610/sor/kisspng-lamborghini-murcilago-sports-car-lamborghini-ave-tonino-lamborghini-5b1de0c19b7797.3666385415286847376368.jpg"></img>
      <img src="https://banner2.cleanpng.com/20180920/ocl/kisspng-logo-vogue-fashion-font-magazine-vogue-jan-boyd-calligraphy-amp-illustration-1713938789329.webp"></img>
      <img src="https://banner2.cleanpng.com/lnd/20241123/xu/01a0c7a4bc31fd14d50f86a45d55c0.webp"></img>
      <img src="https://banner2.cleanpng.com/lnd/20241123/qf/82f9580f3c48a3ee81ab2450bfc341.webp"></img>

     </div>

     <div className='show-articles'>
       <button className="see-all-button" onClick={handleSeeAll}>
          See All Articles
        </button>
     </div>


     <div className="selection">
      <a target='_blank' href="http://localhost:5173/articles/why-did-the-city-museum-have-to-cancel-its-exhibit">
      <div className="article article1">
        <p>Why did the City Museum have to cancel it's exhibit?</p>
      </div>
      </a>
      <a  target="_blank" href='http://localhost:5173/articles/petra-jones-interview-the-inner-workings-of-a-fantasy'>
      <div className="article article2">
      <p>Petra Jones interview: The inner workings of a fantasy</p>
      </div>
      </a>
     </div>

      <div className="selection">
        <a target='_blank' href="http://localhost:5173/articles/restaurating-the-kasa-castle-works-begin">
      <div className="article article3">
        <p>Restaurating the Kasa castle: works begin</p>
      </div>
      </a>

      <a target='_blank' href="http://localhost:5173/articles/thousands-of-people-prepare-for-the-city-footbal-friendly-competition">
      <div className="article article4">
      <p>Thousands of people prepare for the city footbal friendly competition</p>
      </div>
      </a>
     </div>

     <div className="interview">
      <div className="title">
        <p>
        Exclusive interview with Marell Fellow
        </p>
        </div>
      <div className="interview-cover">
        <p>The art of Cinema through the eyes of the 100 years old Marell Fellow</p>
      </div>
     </div>

        <div className='show-articles'>
       <button className="see-all-button" onClick={handleSeeAll}>
          See All Articles
        </button>
     </div>

     <div className="journalist-of-the-day">
        <Link to={`/journalist`}><div className="normal-card journalist-card">MEET the journalist of {currentMonth}: {journalist_of_the_month}</div></Link>
      <img src={journalist_of_the_month_image}></img>

     </div>

  <div className="selection">
    <a target='_blank' href="http://localhost:5173/articles/summer-exhibition-end">
      <div className="article article5">
        <p>Summer Exhibition end</p>
      </div>
      </a>
      <a target='_blank' href="http://localhost:5173/articles/eduline-a-magazine-dedicated-to-seniors">      <div className="article article6">
      <p>'Eduline', a magazine dedicated to seniors</p>
      </div>
      </a>
     </div>
     
          <div className='show-articles'>
       <button className="see-all-button" onClick={handleSeeAll}>
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
            <Link to={`/news/${slug}`}>Learn more</Link>
          </div>
        );
      })}
    </div>


  
    </main>
  )
}
