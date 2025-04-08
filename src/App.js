import "./App.css";
import { Category } from "./Category";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  let [finalCategory, setfinalCategory] = useState([]);
  let [finalProduct, setfinalProduct] = useState([]);
  let [catName, setCatname] = useState("");
  let getcategoruy = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => res.data)
      .then((finalRes) => {
        setfinalCategory(finalRes);
      });
  };

  let getProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((productsres) => productsres.data)
      .then((finalRes) => {
        setfinalProduct(finalRes.products);
      });
  };

  useEffect(() => {
    getcategoruy();
    getProducts();
  }, []);

  useEffect(() => {
    if (catName !== "") {
      axios
        .get(`https://dummyjson.com/products/category/${catName}`)
        .then((productsres) => productsres.data)
        .then((finalRes) => {
          setfinalProduct(finalRes.products);
        });
    }
  }, [catName]);

  let Pitems = finalProduct.map((product, index) => {
    return <ProductItem key={index} pdata={product} />;
  });
  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-[40px] font-bold mb-[30px]">
          Our products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-[30%_auto] gap-5">
          <div className="p-4 rounded-lg shadow-md">
            <Category finalCategory={finalCategory} setCatname={setCatname} />
          </div>
          <div>
            <div className="grid grid-cols-3 gap-4">
              {finalProduct.length >= 1 ? Pitems : "No Product Found"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

function ProductItem({ pdata }) {
  return (
    <div className="shadow-lg text-center pb-4">
      <img src={pdata.images} className="w-[100%]" />
      <h4>{pdata.title}</h4>
      <p>Rs {pdata.price}</p>
    </div>
  );
}
