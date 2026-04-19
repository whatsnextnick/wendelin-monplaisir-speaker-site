import { useEffect } from "react";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BookingModal({ open, onClose }: BookingModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-2xl mx-4 bg-white shadow-2xl flex flex-col"
        style={{ height: "min(90vh, 780px)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e2dd] bg-[#fcf9f4] shrink-0">
          <div>
            <h2 className="font-headline font-bold text-lg text-[#1c1c19]">Book Wendelin Monplaisir</h2>
            <p className="text-xs text-[#857467] mt-0.5">Complete the inquiry form below and our team will follow up shortly.</p>
          </div>
          <button
            onClick={onClose}
            className="text-[#524439] hover:text-[#1c1c19] transition-colors p-1 ml-4 shrink-0"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Typeform iframe */}
        <iframe
          src="https://form.typeform.com/to/qaNTdAK6"
          className="w-full flex-1 border-0"
          allow="camera; microphone; autoplay; encrypted-media;"
          title="Speaker Booking Inquiry"
        />
      </div>
    </div>
  );
}
