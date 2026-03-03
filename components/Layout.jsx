// components/Layout.jsx
import Header from "./Header";
import Footer from "./Footer";
import Toast from "./Toast";
import { useApp } from "../context/AppContext";

export default function Layout({ children }) {
  const { toast } = useApp();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[72px]">{children}</main>
      <Footer />
      {toast && <Toast message={toast.message} icon={toast.icon} />}
    </div>
  );
}
