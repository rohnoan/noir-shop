import { Suspense } from "react";
import ShopClient from "@/components/ShopClient";

export default function ShopPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopClient />
    </Suspense>
  );
}