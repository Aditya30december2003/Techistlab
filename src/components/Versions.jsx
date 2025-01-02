import React, { useState } from 'react';
import { SlArrowRight } from "react-icons/sl";

const DocumentVersions = ({ isAdmin = false }) => {
  const [requestedVersions, setRequestedVersions] = useState(new Set());
  
  const versions = [
    { version: "2.5", date: "2024", isLatest: true },
    { version: "2.4", date: "2023", isLatest: false },
    { version: "2.3", date: "2023", isLatest: false },
    { version: "2.2", date: "2022", isLatest: false },
    { version: "2.1", date: "2022", isLatest: false },
    { version: "2.0", date: "2021", isLatest: false },
    { version: "1.9", date: "2021", isLatest: false },
    { version: "1.8", date: "2020", isLatest: false },
    { version: "1.7", date: "2020", isLatest: false }
  ];

  const handleRequestVersion = (version) => {
    if (!requestedVersions.has(version)) {
      setRequestedVersions(new Set([...requestedVersions, version]));
      
      // Email configuration
      const emailConfig = {
        recipient: 'ask@techistlab.co.uk', // Replace with your support email
        subject: `Document Version ${version} Request`,
        body: `Hello,\n\nI would like to request access to document version ${version}.\n\nThank you.`
      };

      // Create mailto URL
      const mailtoUrl = `mailto:${emailConfig.recipient}?subject=${encodeURIComponent(emailConfig.subject)}&body=${encodeURIComponent(emailConfig.body)}`;
      
      // Open default email client
      window.location.href = mailtoUrl;
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg mb-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Past versions</h2>
      
      <div className="space-y-2">
        {versions.map((item) => (
          <div 
            key={item.version}
            className={`flex items-center justify-between p-4 bg-white rounded-lg border 
              ${!isAdmin && !item.isLatest ? 'bg-gray-50' : 'hover:bg-gray-50'} 
              transition-all duration-200`}
          >
            <div className="flex items-center justify-between flex-1">
              <div className="flex items-center space-x-4">
                <h3 className={`text-lg font-medium 
                  ${!isAdmin && !item.isLatest ? 'text-gray-500' : 'text-gray-900'}`}>
                  Version {item.version}
                </h3>
                {item.isLatest && (
                  <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded">
                    Latest
                  </span>
                )}
              </div>
              
              <div className="flex items-center space-x-4">
                {!isAdmin && (
                  <button
                    onClick={() => handleRequestVersion(item.version)}
                    className={`px-4 py-2 text-sm font-medium rounded-md
                      ${requestedVersions.has(item.version)
                        ? 'bg-gray-100 text-gray-500'
                        : 'bg-purple-100 text-purple-700 hover:bg-purple-200'}`}
                  >
                    Request via Email
                  </button>
                )}
                <SlArrowRight className={`w-5 h-5 ${!isAdmin && !item.isLatest ? 'text-gray-400' : 'text-gray-600'}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentVersions;
