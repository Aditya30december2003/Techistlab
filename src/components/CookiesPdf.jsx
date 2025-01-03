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
        const fileId = '6777df8e00223836a4f0'; // Replace with your PDF file ID
        const result = storage.getFileView('6777deb40009fe11abef', fileId); // 'pdf' is your bucket ID
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
    <div className="flex items-center justify-center  py-20 ">
      <button
        onClick={() => window.open(pdfUrl, '_blank')}
         className="mt-0 text-center text-[1.7rem] w-[80%] md:w-[30%] p-2 mx-auto border-2 font-bold rounded-md shadow-[10px_10px_1px_1px_#D6B4FC] lg:hover:shadow-[10px_10px_1px_1px_#D6B4FC] hover:scale-95 cursor-pointer"
        disabled={!pdfUrl} // Disable button if URL is not available
      >
        View as PDF
      </button>
    </div>
  );
};

export default PdfView;
