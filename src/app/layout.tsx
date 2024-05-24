import type { Metadata } from "next";
import "./styles.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Read Only Blog",
};

export default function RootLayout({
  children,
}: // users,
{
  children: React.ReactNode;
  // users: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="top-nav">
          <div className="nav-text-large">My App</div>
          <ul className="nav-list">
            <li>
              <Link href="/posts" prefetch={false}>
                Posts
              </Link>
            </li>
            <li>
              <Link href="/todos" prefetch={false}>
                Todos
              </Link>
            </li>
            <li>
              <Link href="/users" prefetch={false}>
                Users
              </Link>
            </li>
          </ul>
        </nav>
        {/* <div>{users}</div> */}
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
