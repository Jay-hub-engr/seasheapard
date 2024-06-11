import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

export default function privacy() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          SeaShepard digital security through the use of a{" "}
          <span className="text-blue-600">VPN</span>.
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Here are the many reasons why SeaShepard should use a VPN. By group 31.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a href="/products" className="button">
            Privacy
          </a>
          <a href="/products" className="button button-outline">
            Security &rarr;
          </a>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}