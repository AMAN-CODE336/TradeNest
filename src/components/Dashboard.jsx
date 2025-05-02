import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex justify-center items-center gap-12">
      <div>
        <img src="images/home-img.png" alt="" className="h-auto w-100" />
      </div>
      <div className="flex flex-col mt-28 gap-8">
        <h2 className="text-3xl font-semibold">
          Your Gateway to <br /> the Markets
        </h2>
        <p className="text-xl">
          Experience seamless, insightful, <br /> and bold investing.
        </p>
        <Link to={""}>
          <div>
            <button className="px-4 py-3 border rounded-md bg-green-400">
              Enter Dashboard
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
