import React from 'react';
import { Shield, Smartphone, Zap, Download, Bell, BarChart as ChartBar, Clock } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-custom text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Track Your Finances Automatically with SpendWise
              </h1>
              <p className="text-xl mb-8">
                Effortlessly monitor your transactions through SMS notifications. No manual entry needed - just install and stay informed.
              </p>
              <a
                href="#download"
                className="inline-flex items-center px-6 py-3 bg-white text-gradient-start rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Download className="mr-2" />
                Get it on Google Play
              </a>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1000&q=80"
                alt="Financial Dashboard"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-custom bg-clip-text text-transparent">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Bell className="h-12 w-12 text-gradient-start mb-4" />
              <h3 className="text-xl font-semibold mb-2">SMS Transaction Monitoring</h3>
              <p className="text-gray-600">
                Automatically captures and categorizes transactions from your bank SMS notifications in real-time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <ChartBar className="h-12 w-12 text-gradient-middle mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Dashboard</h3>
              <p className="text-gray-600">
                View monthly summaries, track spending patterns, and analyze your financial health at a glance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Clock className="h-12 w-12 text-gradient-end mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
              <p className="text-gray-600">
                Stay on top of your finances with instant transaction notifications and updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-custom bg-clip-text text-transparent">How SpendWise Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-custom rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Install & Grant Permissions</h3>
                  <p className="text-gray-600">Install SpendWise and grant SMS reading permissions to begin automatic transaction tracking.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-custom rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Automatic Detection</h3>
                  <p className="text-gray-600">SpendWise automatically detects and categorizes transactions from your bank SMS messages.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-custom rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">View Insights</h3>
                  <p className="text-gray-600">Access your financial dashboard to view spending patterns and transaction history.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
                alt="How SpendWise Works"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-custom bg-clip-text text-transparent">Your Security is Our Priority</h2>
            <p className="text-xl text-gray-600">SpendWise operates with bank-grade security measures to protect your data</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Shield className="h-12 w-12 text-gradient-start mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local Storage Only</h3>
              <p className="text-gray-600">
                All your data is stored locally on your device. We never upload or store your financial information on external servers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Smartphone className="h-12 w-12 text-gradient-middle mb-4" />
              <h3 className="text-xl font-semibold mb-2">SMS Permission Only</h3>
              <p className="text-gray-600">
                We only request SMS reading permission to detect bank transactions. No other permissions required.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Zap className="h-12 w-12 text-gradient-end mb-4" />
              <h3 className="text-xl font-semibold mb-2">Encrypted Database</h3>
              <p className="text-gray-600">
                Your transaction data is stored in an encrypted SQLite database using Room persistence library.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-custom bg-clip-text text-transparent">Start Tracking Your Finances Today</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users who trust SpendWise for automatic transaction tracking
          </p>
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-gradient-custom text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Download className="mr-2" />
            Get it on Google Play
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;