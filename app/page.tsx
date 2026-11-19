
import TRCPersonnelTable from '@/components/layout/Table';
import TRCFundersTable from '@/components/layout/TRCFundersTable';
import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7F8F6]">
      {/* Page Header */}
      <section className="bg-[#064E3B] px-6 py-12 text-center text-white sm:py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#D9BD85]">
            TRC Administration
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Personnel & Funders
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
            A record of TRC personnel qualifications and valued funding partners.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#C9A96E]" />
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
          {/* Personnel */}
          <div className="rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm sm:p-8">
            <TRCPersonnelTable />
          </div>

          {/* Funders */}
          <div className="rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm sm:p-8">
            <TRCFundersTable />
          </div>
        </div>

        <footer className="mt-10 text-center">
          <p className="text-xs tracking-wide text-gray-500">
            TRC • Official Records
          </p>
        </footer>
      </section>
    </main>
  );
}
