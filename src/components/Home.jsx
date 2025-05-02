import Button from "./Button";
import Globe from "../components/Globe";
import { FaArrowRight } from "react-icons/fa";
import ImageSlider from "./ImageSlider";
import HomeGraph from "./HomeGraph";

export default function Home() {
  const stockData = [
    { symbol: "SNAP", company: "Snap Inc.", price: "$14.20", change: "-6.13%" },
    {
      symbol: "COIN",
      company: "Coinbase Global",
      price: "$88.60",
      change: "-5.74%",
    },
    { symbol: "PTON", company: "Peloton", price: "$7.30", change: "-5.25%" },
  ];

  return (
    <>
      <section className="bg-blue-950 h-screen">
        <div className="flex ">
          <div className="flex flex-col mt-42 px-32 gap-8">
            <h2 className="text-4xl text-white">
              Trade Bold. Invest Smart. <br /> Win Your Future.
            </h2>
            <p className="text-xl text-white">
              Not just another trading platform — a revolution in how you see,
              <br /> feel, and grow your money.
            </p>
            <div>
              <Button />
            </div>
          </div>
          <div className="mt-42 ">
            <Globe />
          </div>
        </div>
      </section>

      <div className="flex justify-between px-24 mt-18">
        <div>
          <h2 className="text-3xl font-bold">Top Crypto Today</h2>
        </div>
        <div className="flex relative gap-2">
          <a href="" className="text-xl font-semibold">
            View All 500+
          </a>
          <span className="mt-[7px]">
            <FaArrowRight />
          </span>
        </div>
      </div>
      <div>
        <ImageSlider />
      </div>

      <section className="bg-blue-950  text-white">
        <div className="mt-34 p-4 ps-18  ">
          <div className="flex justify-around h-34 mt-28 space-x-4 p-4 gap-4">
            <h2 className="text-3xl font-semibold">
              Stay ahead of the curve with <br /> real-time market updates.
            </h2>
            <div className="w-px h-full  bg-gray-400"></div>
            <p className="text-lg">
              Get a snapshot of what's hot and what's not — all in one place.{" "}
              <br /> Whether you're tracking daily momentum or <br /> planning
              your next move, this section gives you fast <br /> access to the
              most critical market movements.
            </p>
          </div>
          <div className=" flex mt-16 mb-16 justify-around ">
            <div className=" w-1/2   max-w-xl ">
              <h2 className="text-xl font-bold mb-4">Top Gainers:-</h2>
              <table className="table-auto border-collapse border border-gray-300  w-full">
                <thead className="bg-grey-800">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Symbol</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Company Name
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Price</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Change (%)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {stockData.map((stock, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {stock.symbol}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {stock.company}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {stock.price}
                      </td>
                      <td
                        className={`border border-gray-300 px-4 py-2 text-center ${
                          stock.change.startsWith("-")
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {stock.change}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="">
              <HomeGraph />
            </div>
          </div>
        </div>
      </section>

      <div className=" flex flex-col mt-28">
        <div className="ps-24">
        <h2 className="text-3xl font-semibold">Trusted By Global Investors</h2>
        </div>
        <div className=" flex justify-between items-center gap-6 p-12">
          <div>
            <img
              src="images/investor-img1 (1)-Photoroom.png"
              alt=""
              className="h-12 w-42"
            />
          </div>
          <div>
            <img
              src="images/investor-img2 (1)-Photoroom.png"
              alt=""
              className="h-20 w-42"
            />
          </div>
          <div>
            <img
              src="images/investor-img3 (1)-Photoroom.png"
              alt=""
              className="h-16 w-64"
            />
          </div>
          <div>
            <img
              src="images/investor-img4 (1)-Photoroom.png"
              alt=""
              className="h-8 w-34"
            />
          </div>
          <div>
            <img src="images/investor-img5.jpg" alt="" className="h-16 w-34" />
          </div>
          <div>
            <img
              src="images/investor-img6 (1)-Photoroom (1).png"
              alt=""
              className="h-6 w-28"
            />
          </div>
          <div>
            <img
              src="images/investor-img-7 (1)-Photoroom (1).png"
              alt=""
              className="h-10 w-34"
            />
          </div>
          <div>
            <img
              src="images/investor-img8-Photoroom.png"
              alt=""
              className="h-10 w-34"
            />
          </div>
        </div>
      </div>
    </>
  );
}
