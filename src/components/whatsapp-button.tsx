"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  showTooltip?: boolean;
}

export default function WhatsAppButton({
  phoneNumber = "+918882655977",
  message = "Hi, I'm interested in your web services. I'd like to know more.",
  showTooltip = true,
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    // Format phone number (remove spaces and special characters)
    const cleanNumber = phoneNumber.replace(/\D/g, "");
    const encodedMessage = encodeURIComponent(message);

    // Detect if mobile or desktop
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Create WhatsApp URL
    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${cleanNumber}&text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${cleanNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3, type: "spring", stiffness: 200 }}
      >
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap"
            >
              Chat with us on WhatsApp
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <motion.button
          onClick={handleClick}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative group bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Contact via WhatsApp"
        >
          {/* Ripple effect */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>

          {/* Icon */}
          <MessageCircle className="w-7 h-7 relative z-10" strokeWidth={2} />
        </motion.button>
      </motion.div>

      {/* Alternative: Chat Widget (optional - can be shown on click) */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 bg-white text-gray-800 rounded-2xl shadow-2xl p-6 max-w-sm"
          >
            <button
              onClick={() => setShowMessage(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#25D366] p-2 rounded-full">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">WebHop</h3>
                <p className="text-xs text-gray-500">Typically replies instantly</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              Hi there! 👋 <br />
              How can we help you today?
            </p>

            <button
              onClick={handleClick}
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 rounded-lg font-medium transition-colors"
            >
              Start Chat
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
