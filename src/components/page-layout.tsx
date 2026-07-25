import { personalInfo } from "@/lib/data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
