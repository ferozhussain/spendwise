import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="flex-1 bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              SpendWise is committed to protecting your privacy. This policy explains how we handle your data when you use our SMS-based transaction tracking application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">SMS Permission Usage</h2>
            <p className="text-gray-700 mb-4">
              SpendWise requires SMS reading permission to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Read incoming bank transaction SMS messages</li>
              <li>Parse transaction details automatically</li>
              <li>Update your local transaction database</li>
            </ul>
            <p className="text-gray-700 mt-4">
              We ONLY read SMS messages from known bank sender IDs. Personal messages are never accessed or stored.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Storage</h2>
            <p className="text-gray-700 mb-4">
              All data is stored locally on your device:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Transaction data is stored in an encrypted SQLite database</li>
              <li>No data is ever uploaded to external servers</li>
              <li>Data is automatically deleted when you uninstall the app</li>
              <li>You can clear all data from app settings at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Store</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Transaction amount and type (credit/debit)</li>
              <li>Transaction timestamp</li>
              <li>Merchant information (when available)</li>
              <li>Account last 4 digits (for reference only)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement industry-standard security measures:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>SQLite database encryption</li>
              <li>Secure data deletion practices</li>
              <li>No network access required for core functionality</li>
              <li>Regular security updates and patches</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Clear all stored data at any time</li>
              <li>Revoke SMS permissions</li>
              <li>Uninstall the app and delete all associated data</li>
              <li>Request information about stored data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: privacy@spendwise.app
            </p>
          </section>

          <section>
            <p className="text-gray-600 text-sm">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;