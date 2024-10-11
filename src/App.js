import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { ContentGrid } from "./components/ContentGrid/ContentGrid";
import { Content } from "./components/Content/Content";
import { useState, useEffect } from "react";
import { Admin } from "./components/Admin/Admin";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3001/getPosts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <p>Loading...</p>
              ) : (
                <ContentGrid posts={posts} setPosts={setPosts} />
              )
            }
          />
          <Route path="/content" element={<Content posts={posts} />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
