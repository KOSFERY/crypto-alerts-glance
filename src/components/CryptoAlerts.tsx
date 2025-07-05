
import React from 'react';
import CryptoCard from './CryptoCard';

const CryptoAlerts: React.FC = () => {
  // Datos de ejemplo para las criptomonedas
  const cryptoData = [
    {
      name: 'Bitcoin',
      ticker: 'BTC',
      price: 67429.32,
      change: 2.45,
      icon: '₿',
      lastUpdated: '2 min ago'
    },
    {
      name: 'Ethereum',
      ticker: 'ETH',
      price: 3847.21,
      change: -1.23,
      icon: 'Ξ',
      lastUpdated: '1 min ago'
    },
    {
      name: 'Cardano',
      ticker: 'ADA',
      price: 0.4521,
      change: 5.67,
      icon: '₳',
      lastUpdated: '3 min ago'
    },
    {
      name: 'Solana',
      ticker: 'SOL',
      price: 189.43,
      change: -3.21,
      icon: 'S',
      lastUpdated: '2 min ago'
    },
    {
      name: 'Polkadot',
      ticker: 'DOT',
      price: 7.89,
      change: 1.87,
      icon: '●',
      lastUpdated: '4 min ago'
    },
    {
      name: 'Chainlink',
      ticker: 'LINK',
      price: 13.42,
      change: -0.95,
      icon: '⬡',
      lastUpdated: '1 min ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Crypto Alerts
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stay updated with real-time cryptocurrency prices and set custom alerts for your favorite coins.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cryptoData.map((crypto, index) => (
            <CryptoCard key={crypto.ticker} crypto={crypto} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Data updates every minute • Market data provided by leading exchanges
          </p>
        </div>
      </div>
    </div>
  );
};

export default CryptoAlerts;
