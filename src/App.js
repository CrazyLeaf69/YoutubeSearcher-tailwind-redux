import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import SearchResults from "./components/SearchResults";
import VideoDetails from "./components/VideoDetails";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header></Header>
        <main className="p-5 md:p-10 dark:bg-gray-800 h-full">
          <Routes>
            <Route path="/" exact element={<SearchResults />} />
            <Route path="/video/:videoId" element={<VideoDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
