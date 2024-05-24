import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Read Only Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <p>Post Layout</p>
      {children}
    </div>
  );
}
