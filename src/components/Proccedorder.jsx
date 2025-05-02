import { CherryIcon, ChevronDown } from "lucide-react";

export default function Proccedorder() {
  const Data = [
    { price: "0.000000033", Qty: "2,67,00,00,000", Total: "955.02" },
    { price: "0.000000032", Qty: "2,97,00,00,000", Total: "246.09" },
    { price: "0.000000031", Qty: "2,25,00,00,000", Total: "974.08" },
    { price: "0.000000030", Qty: "2,62,00,00,000", Total: "389.01" },
    { price: "0.000000029", Qty: "2,75,00,00,000", Total: "002.05" },
    { price: "0.000000028", Qty: "2,82,00,00,000", Total: "632.07" },
    { price: "0.000000027", Qty: "2,13,00,00,000", Total: "747.04" },
    { price: "0.000000026", Qty: "2,63,00,00,000", Total: "584.10" },
  ];

  return (
    <>
      <section className="relative flex flex-col justify-end items-end " style={{height:"100%",width : "25%"}}>
        <div className="bg-gray-900 text-white overflow-y-scroll p-4 flex flex-col">
          <div className="flex justify-around mb-2 ">
            <h2 className="font-medium hover:text-orange-500  hover:underline underline-offset-2">
              Order Book
            </h2>
            <h2 className="font-medium hover:text-orange-500  hover:underline underline-offset-2">
              Trade History
            </h2>
          </div>
          <hr />
          <div className="flex justify-start gap-6 mt-3">
            <a
              href="#"
              className="px-3 py-1 rounded-md border border-white text-sm"
            >
              All
            </a>
            <a
              href="#"
              className="px-2 py-1 rounded-md border border-white text-green-400 text-sm"
            >
              Bids
            </a>
            <a
              href="#"
              className="px-2 py-1 rounded-md border border-white text-pink-400 text-sm"
            >
              Asks
            </a>
          </div>
          <div className="flex justify-around mt-3 ">
            <h3 className="  text-sm font-extralight">Price(USDT)</h3>
            <h3 className="text-sm font-extralight">Qty(Dogde)</h3>
            <h3 className="text-sm font-extralight">Total(USDT)</h3>
          </div>

          <div>
            <div className=" ">
              {Data.map((data, index) => (
                <div key={index}>
                  <div className="flex justify-around gap-2">
                    <h2 className="text-md font-light text-red-400">
                      {data.price}
                    </h2>
                    <h2 className="text-md font-light">{data.Qty}</h2>
                    <h2 className="text-md font-light">{data.Total}</h2>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center mb-1 border-b-1 bg-red-300 text-red-500 border-t-1 mt-1 ">
              <button className="text-lg font-semibold mt-3 mb-3  ">
                0.00000000001515
              </button>
              <ChevronDown />
            </div>

            <div className="">
              {Data.map((data, index) => (
                <div key={index}>
                  <div className="flex justify-around gap-2">
                    <h2 className="text-md font-light text-green-400">
                      {data.price}
                    </h2>
                    <h2 className="text-md font-light">{data.Qty}</h2>
                    <h2 className="text-md font-light">{data.Total}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       
          <div className="flex justify-around m-2" style={{width:"100%" , height : "50px"}}>
            <a
              href=""
              className="px-12 py-3 bg-green-400 border rounded-md font-semibold  "
            >
              Buy
            </a>
            <a
              href=""
              className="px-12 py-3 bg-red-400 border rounded-md font-semibold  "
            >
              Sell
            </a>
          </div>
      </section>
    </>
  );
}
