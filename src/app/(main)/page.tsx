/*
 * [Risp]
 * Copyright (c) [2025] [Risp S.A.]
 *
 * This source code is licensed under the Business Source License 1.1 (BUSL-1.1),
 * which restricts production use. You may not use this file except in compliance
 * with the License. You may obtain a copy of the License in the project root or at:
 *
 * https://mariadb.com/bsl11
 *
 * Change Date: 2029-01-01
 * Change License: Apache 2.0
 */

import { ServiceList } from "./home/components/service-list";

export default async function Home(props: {
  searchParams?: Promise<{
    city?: string;
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const city = searchParams?.city || "";
  return (
    <main>
      <div className="w-full flex justify-center">
        <h2 className="text-2xl p-4 w-xl font-semibold tracking-tight md:w-3xl">
          Cerca tuyo
        </h2>
      </div>
      <div className="w-full flex justify-center">
        <ServiceList stateName={city} serviceName={query} />
      </div>
      <div className="w-full flex justify-center mt-3">
        <h2 className="text-2xl p-4 w-xl font-semibold tracking-tight md:w-3xl">
          Mejor Puntuados
        </h2>
      </div>
      <div className="w-full flex justify-center">
        <ServiceList stateName={city} serviceName={query} />
      </div>
    </main>
  );
}
