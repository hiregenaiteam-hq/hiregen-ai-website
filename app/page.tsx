import LandingPageClient from "./_components/LandingPageClient";

export const dynamic = "force-dynamic"; // optional, avoids static prerendering

export default function Page() {
  return <LandingPageClient />;
}