"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("@/app/(main)/map/components/map"), {
  ssr: false,
});

export default function Map() {
  return (
    <main className="flex flex-col w-full justify-center">
      <div className="flex w-full justify-center">
        <h2 className="scroll-m-20 w-4xl pb-2 pl-2 text-xl font-semibold tracking-tight first:mt-0">
          Encontrá los mejores servicios cerca de tu zona
        </h2>
      </div>
      <div className="flex justify-center w-full">
        <LeafletMap />
      </div>
    </main>
  );
}
