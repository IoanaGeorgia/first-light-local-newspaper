import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import Welcome from "./welcome/welcome";
import EventTemplate from "./templaes/EventTemplate";
import Article from "./ArticleGallery/article";
import ArticleTemplate from "./templaes/ArticleTemplate";
import ScrollToTop from "./templaes/ScrollToTop";
import NotFound from "./templaes/NotFound";
import Journalist from "./templaes/Journalist";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/news/:slug" element={<EventTemplate />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/articles/:slug" element={<ArticleTemplate />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/journalist" element={<Journalist />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
