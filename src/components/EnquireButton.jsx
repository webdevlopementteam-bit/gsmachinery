"use client";

import { openEnquiryPopup } from "@/lib/web3forms";

export default function EnquireButton({ children, className = "" }) {
  return (
    <button type="button" onClick={openEnquiryPopup} className={className}>
      {children}
    </button>
  );
}
