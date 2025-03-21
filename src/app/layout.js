
import "./globals.css";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-100">
        {/* Sidebar */}
        <Sidebar className="fixed left-0 top-0 w-64 h-screen bg-white shadow-lg z-50" />

        {/* Main content wrapper */}
        <div className="ml-64 flex flex-col min-h-screen">
          {/* Topbar */}
          <Topbar className="fixed top-0 left-64 right-0 h-16 bg-white shadow-md z-40" />

          {/* Dynamic Page Content */}
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
