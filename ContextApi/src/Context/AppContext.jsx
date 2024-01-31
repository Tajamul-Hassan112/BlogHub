// AppContext.jsx
import { createContext, useEffect, useState } from "react";
import baseUrl from "../baseUrl";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  function handlePageChange(page) {
    setPage(page);
    fetchData(page);
  }

  async function fetchData(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      let response = await fetch(url);
      let data = await response.json();
      // console.log(data);
      setPage(data.page);
      setTotalPages(data.totalPages);
      setPosts(data.posts);
    } catch (error) {
      console.log("error occurred");
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const value = {
    loading,
    setLoading,
    posts,
    page,
    totalPages,
    setPosts,
    setPage,
    fetchData,
    handlePageChange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
