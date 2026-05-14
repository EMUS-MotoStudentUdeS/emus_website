import { Outlet, createRootRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LanguageProvider } from "../i18n/language";

function Layout() {
  return (
    <LanguageProvider>
      <Header />
      <Outlet />
      <Footer />
    </LanguageProvider>
  );
}

export const Route = createRootRoute({
  component: Layout
});
