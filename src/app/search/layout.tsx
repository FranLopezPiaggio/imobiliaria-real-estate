import { Header, Footer } from "@/components/layout";

/**
 * Search Layout - FE-012
 *
 * Layout wrapper for search pages with Header and Footer.
 *
 * @see DESIGN.md §5.4 (Filter Sidebar), §6 (Responsive)
 * @see PRD.md §3.1 (Search US-001 to US-005)
 */

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
