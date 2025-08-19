import React, { useEffect, useState } from 'react';
import Product from "../components/Product";
import Spinner from "../components/Spinner.jsx";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log("Something is wrong:", error);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className='grid xs:grid-col-1 sm:grid-col-2 md:grid-col-3 lg:grid-cols-4 max-w-6xl mx-auto space-y-10 space-x-5 min-h-[80vh]'>
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className='flex justify-center items-center'>No data found</div>
      )}
    </div>
  );
};

export default Home;
