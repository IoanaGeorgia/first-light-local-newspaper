import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import Welcome from "./welcome/welcome";
import EventTemplate from "./templates/EventTemplate";
import Article from "./ArticleGallery/article";
import ArticleTemplate from "./templates/ArticleTemplate";
import ScrollToTop from "./templates/ScrollToTop";
import NotFound from "./templates/NotFound";
import JournalistTemplate from "./templates/JournalistTemplate";
import InterviewTemplate from "./templates/InterviewTemplate";

function App() {
  return (
    <Router basename="/first-light-local-newspaper">
      <Header />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/news/:slug" element={<EventTemplate />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/articles/:slug" element={<ArticleTemplate />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/journalist" element={<JournalistTemplate />} />
          <Route path="/interview/:slug" element={<InterviewTemplate />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
