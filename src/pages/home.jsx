import { useCallback, useEffect, useState } from "react";
import ProductList from "../component/productList";

function Home() {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  const abc = useCallback(() => console.log("abc"), []);

  return (
    

      <ProductList a={"aaa"} abc={abc} post={post} />
   
  );
}

export default Home;