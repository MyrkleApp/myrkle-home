import LandingPage from "@/components/landing";
import { Suspense } from "react";

export default function Home() {
  
  return (
    <Suspense>
      <LandingPage />
    </Suspense>
  );
}
