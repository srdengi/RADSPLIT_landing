import React from 'react';
import './landingpage.css';

const LandingPage = () => {
  const handleConnectWallet = () => {
    console.log('Conectando a la wallet de Radix...');
  };

  return (
    <div className="h-screen bg-gradient flex justify-center items-center margin-left"> {/* Agrega la clase aquí */}
      <div className="text-center bg-white p-8 rounded-lg shadow-md">
        <img
          src="./public/logo1.svg"
          alt="RadSplit Logo"
          className="w-36 h-36 mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">RadSplit</h1>
        <p className="text-xl text-gray-600 mb-8">
          Welcome to RadSplit, the app to split bills in groups
        </p>
        <button
          onClick={handleConnectWallet}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded transition duration-300"
        >
          Connect Radix Wallet
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
