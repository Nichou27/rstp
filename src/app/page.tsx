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

import CarouselCard from "./ui/home/carousel-card";


export default function Home() {
  return (
    <main>
      <div className="w-full flex justify-center">
        <CarouselCard />
      </div>
    </main>
  )
}
