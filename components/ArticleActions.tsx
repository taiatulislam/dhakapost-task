"use client";

import { CiBookmark } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { FiPrinter } from "react-icons/fi";

export default function ArticleActions() {

  const handleShare = async () => { 
    const shareData: ShareData = {
      title: document.title,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled or share failed — no action needed
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
      } catch {
        // Clipboard not available
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex items-center gap-4 text-muted-foreground">
      <button
        aria-label="share"
        onClick={handleShare}
        className="transition-colors hover:text-foreground border border-border rounded-full p-1.5 cursor-pointer"
      >
        <IoShareSocialOutline className="h-4 w-4" />
      </button>
      <button
        aria-label="bookmark"
        className="transition-colors hover:text-foreground border border-border rounded-full p-1.5 cursor-pointer"
      >
        <CiBookmark className="h-4 w-4" />
      </button>
      <button
        aria-label="print"
        onClick={handlePrint}
        className="transition-colors hover:text-foreground border border-border rounded-full p-1.5 cursor-pointer"
      >
        <FiPrinter className="h-4 w-4" />
      </button>
    </div>
  );
}
