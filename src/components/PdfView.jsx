import React, { useState, useEffect } from 'react';
import { storage } from '../Appwrite/appwrite'; // Adjust this import path based on your setup

const PdfView = () => {
  const [pdfUrl, setPdfUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        setIsLoading(true);
        // Get file view URL from storage bucket
        const fileId = '677633d9000b815591e7'; // Replace with your PDF file ID
        const result = storage.getFileView('677633960027ce682e5b', fileId); // 'pdf' is your bucket ID
        console.log(result); 
        setPdfUrl(result);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching PDF:', error);
        setError('Failed to load PDF. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchPdf();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading PDF...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-red-600">
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen  p-4 mb-20">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg h-full">
        {pdfUrl && (
          <iframe
            src={pdfUrl}
            className="w-full h-full rounded-lg"
            title="PDF Viewer"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

export default PdfView;
