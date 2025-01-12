"use client";

import Link from "next/link";
import "./styles/globals.css";

export default function NotFound() {
  return (
    <html>
      <body className="container">
        <div className="text-center">
          <h1 className="mt-10 font-semibold text-center text-black">
            Страница не найдена
          </h1>
          <Link href={"/"} className="text-black">
            Домой
          </Link>
        </div>
      </body>
    </html>
  );
}
