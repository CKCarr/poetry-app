import React from "react";
import Image from "next/image";
import { assetPath } from "@/lib/assetPath";
// The Footer component provides links to website builder GitHub, LinkedIn, and personal website. It is styled to match the overall theme of the Poetry Shelf application and is positioned at the bottom of the page.
// will update to be a different component with a different name and content in the future.
export default function Footer() {
  return (
    <footer className="footer-container bg-gunmetal text-anti-flash-white h-24 flex flex-col justify-center items-center w-full">
      <a
        className="flex items-center gap-2 hover:underline"
        href="https://github.com/CKCarr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src={assetPath("/file.svg")}
          alt="File icon"
          width={16}
          height={16}
        />
        My Github
      </a>
      <a
        className="flex items-center gap-2 hover:underline"
        href="https://www.linkedin.com/in/crystal-carrillo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src={assetPath("/window.svg")}
          alt="Window icon"
          width={16}
          height={16}
        />
        My LinkedIn
      </a>
      <a
        className="flex items-center gap-2 hover:underline"
        href="https://ckcarr.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src={assetPath("/globe.svg")}
          alt="Globe icon"
          width={16}
          height={16}
        />
        Go to CKCarr.dev →
      </a>
    </footer>
  );
}
