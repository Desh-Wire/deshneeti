'use client'

import Face from "@/components/Face";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter();

  return (
    <div>
      <MaxWidthWrapper>
        <Face router={router} />
      </MaxWidthWrapper>
    </div>
  );
}
