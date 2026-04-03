import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const SuccessModal = ({ isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fade-in-up">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

          {/* Modal */}
          <div className="relative bg-bg-surface border border-primary/20 rounded-2xl p-8 max-w-md w-full text-center space-y-4 shadow-2xl">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center animate-bounce">
                <FaCheckCircle className="text-4xl text-success" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-text-primary">
              Message Sent Successfully!
            </h2>

            <p className="text-text-secondary leading-relaxed">
              Thank you for reaching out! I've received your message and will get back to you as soon as possible.
            </p>

            <div className="pt-4">
              <p className="text-sm text-text-muted">
                ✓ Check your email for confirmation
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessModal;