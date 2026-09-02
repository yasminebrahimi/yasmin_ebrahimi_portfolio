import { HiHeart } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1160px] border-t border-[#e5e4e7] px-6 py-6 lg:px-0">
      <div className="flex flex-col items-center justify-between gap-2 text-sm text-[#363636] sm:flex-row">
        <p>Copyright © {new Date().getFullYear()} All rights reserved</p>
        <p className="flex items-center gap-1.5">
          This web app is made with <HiHeart className="text-brand" /> by
          Yasmin Ebrahimi
        </p>
      </div>
    </footer>
  );
}
