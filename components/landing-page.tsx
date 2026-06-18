import { FeaturesSection } from "@/components/features-section";
import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { ProofRail } from "@/components/proof-rail";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StorySection } from "@/components/story-section";
import { WorkflowSection } from "@/components/workflow-section";
import type { Locale } from "@/lib/locale";

export function LandingPage({ locale }: { locale: Locale }) {
  return (
    <div className="site-root">
      <SiteHeader locale={locale} currentPath="/" />
      <main id="main-content">
        <HeroSection locale={locale} />
        <div className="section-divider"><div className="section-divider__line" /></div>
        <ProofRail locale={locale} />
        <div className="section-divider"><div className="section-divider__line" /></div>
        <WorkflowSection locale={locale} />
        <div className="section-divider"><div className="section-divider__line" /></div>
        <FeaturesSection locale={locale} />
        <div className="section-divider"><div className="section-divider__line" /></div>
        <StorySection locale={locale} />
        <div className="section-divider"><div className="section-divider__line" /></div>
        <FaqSection locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
