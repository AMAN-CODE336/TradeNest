import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Buy Cryptos */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Buy Cryptos</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Bitcoin</a></li>
            <li><a href="#" className="hover:text-white transition">Ethereum</a></li>
            <li><a href="#" className="hover:text-white transition">Cardano</a></li>
            <li><a href="#" className="hover:text-white transition">Dogecoin</a></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Products</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Wallet</a></li>
            <li><a href="#" className="hover:text-white transition">Exchange</a></li>
            <li><a href="#" className="hover:text-white transition">Staking</a></li>
            <li><a href="#" className="hover:text-white transition">NFT Market</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-10">
        © 2025 CryptoWorld. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
