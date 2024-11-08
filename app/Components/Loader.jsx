// components/Loader.js
import React from 'react';

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {/* Simple spinning loader with white border */}
      <div className="w-16 h-16 border-8 border-t-8 border-transparent border-t-white rounded-full animate-spin"></div>
    </div>
  );
}
