import { Link } from "react-router-dom";

const ProductNav = () => {
  return (
    <div className=" container">
      <div className=" flex  justify-between items-center   px-8 bg-green-400">
        <Link to="/" className=" flex  items-center gap-4">
          <img
            className=" w-16 h-16 rounded-full"
            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
            alt=""
          />
          <div className=" flex flex-col text-white">
            <h3 className=" text-2xl font-bold ">Paradise Nursery</h3>
            <i style={{ color: "white" }}>Where Green Meets Serenity</i>
          </div>
        </Link>
        <div>
          <h1 className=" text-3xl text-white text-center font-medium">
            Plants
          </h1>
        </div>
        <div>
          <Link to="/cart" className="">
            <h1 className="cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                id="IconChangeColor"
                height={68}
                width={68}
              >
                <rect width={156} height={156} fill="none" />
                <circle cx={80} cy={216} r={12} />
                <circle cx={184} cy={216} r={12} />
                <path
                  d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                  fill="none"
                  stroke="#faf9f9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  id="mainIconPathAttribute"
                />
              </svg>
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductNav;
