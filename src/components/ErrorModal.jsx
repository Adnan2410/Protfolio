import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const ErrorModal = ({ isOpen, message }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fade-in-up">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

          {/* Modal */}
          <div className="relative bg-bg-surface border border-danger/20 rounded-2xl p-8 max-w-md w-full text-center space-y-4 shadow-2xl">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-danger/20 rounded-full flex items-center justify-center animate-bounce">
                <FaExclamationCircle className="text-4xl text-danger" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-text-primary">
              Oops! Something Went Wrong
            </h2>

            <p className="text-text-secondary leading-relaxed">
              {message || 'There was an error sending your message. Please try again.'}
            </p>

            <div className="pt-4">
              <p className="text-sm text-text-muted">
                Please check your connection and try again
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorModal;