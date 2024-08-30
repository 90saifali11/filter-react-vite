import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom"; 

const ProductList = () => {
 

  const [post, setPost] = useState([]); 
  const [search, setSearch] = useState(""); 
  const [category, setCategory] = useState("all"); 
  const [maxPrice, setMaxPrice] = useState(""); 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  const filteredArr = post.filter((data) => {
    const matchesSearch = data.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || data.category === category;
    const price = parseFloat(data.price);
    const matchesMaxPrice = maxPrice === "" || price <= parseFloat(maxPrice);
    return matchesSearch && matchesCategory && matchesMaxPrice;
  });

  // Extract unique categories for the dropdown
  const categories = ["all", ...new Set(post.map((item) => item.category))];

  return (
    <>
      

      <div className="container">
        <div className="controls">
          <input
            placeholder="Search products..."
            type="search"
            className="search-bar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="dropdown"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>

          <input
            type="number"
            className="price-range"
            placeholder="Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>

        <div className="product-list">
          {filteredArr.length > 0 ? (
            filteredArr.map((data) => (
              <Link  to={`/product/${data.id}`}
              key={data.id}
              className="product-card"
            >
              <div key={data.id} className="product-card">
                <img alt={data.title} src={data.image} />
                <div className="product-info">
                  <h3>{data.category}</h3>
                  <h2>{data.title}</h2>
                  <p>${data.price}</p>
                </div>
              </div>
              </Link>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>

      
    </>
  );
}

export default ProductList;
