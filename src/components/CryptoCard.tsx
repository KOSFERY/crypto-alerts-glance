
import React, { useState } from 'react';
import { ArrowUp, ArrowDown, Bell, BellOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface CryptoData {
  name: string;
  ticker: string;
  price: number;
  change: number;
  icon: string;
  lastUpdated: string;
}

interface CryptoCardProps {
  crypto: CryptoData;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ crypto }) => {
  const [alertEnabled, setAlertEnabled] = useState(false);
  
  const isPositive = crypto.change >= 0;
  const changeColor = isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';
  const TrendIcon = isPositive ? ArrowUp : ArrowDown;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: price < 1 ? 6 : 2,
    }).format(price);
  };

  const formatChange = (change: number) => {
    return `${isPositive ? '+' : ''}${change.toFixed(2)}%`;
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:scale-105">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
              {crypto.icon}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                {crypto.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {crypto.ticker}
              </p>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setAlertEnabled(!alertEnabled)}
            className={`p-2 rounded-full transition-all duration-200 ${
              alertEnabled 
                ? 'bg-blue-100 text-blue-600 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400' 
                : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            {alertEnabled ? <Bell size={18} /> : <BellOff size={18} />}
          </Button>
        </div>

        <div className="space-y-3">
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {formatPrice(crypto.price)}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className={`flex items-center space-x-1 ${changeColor}`}>
              <TrendIcon size={16} className="flex-shrink-0" />
              <span className="font-semibold text-sm">
                {formatChange(crypto.change)}
              </span>
            </div>
            
            <span className="text-xs text-gray-400 dark:text-gray-500">
              24h
            </span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Last updated: {crypto.lastUpdated}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CryptoCard;
