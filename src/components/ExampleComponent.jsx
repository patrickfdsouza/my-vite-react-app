import React from 'react';

const topTasks = [
  'Review Q2 performance snapshot',
  'Resolve 3 delayed shipments',
  'Send weekly growth summary',
];

const ExampleComponent = () => {
  return (
    <section className="max-w-2xl mx-auto my-8 p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
            ↑
          </div>
          <div>
            <p className="text-xs tracking-widest text-blue-500 uppercase">Team Dashboard</p>
            <h2 className="text-xl font-bold text-blue-950">Weekly Operations</h2>
          </div>
        </div>
        <span className="text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full">
          +12.4% vs last week
        </span>
      </div>

      {/* Metrics */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-white border border-blue-100 rounded-xl p-4">
          <p className="text-xs text-blue-400">Revenue</p>
          <p className="text-3xl font-bold text-blue-900">$48.2K</p>
          <p className="text-xs text-green-600 mt-1">On track with target</p>
        </div>
        <div className="bg-white border border-blue-100 rounded-xl p-4">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-blue-500 text-sm">▦</span>
            <p className="text-xs text-blue-400">Fulfillment</p>
          </div>
          <p className="text-3xl font-bold text-blue-900">93%</p>
          <div className="mt-2 h-2 bg-blue-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: '93%' }} />
          </div>
        </div>
      </div>

      <hr className="my-5 border-blue-100" />

      {/* Task list */}
      <div>
        <p className="text-sm font-semibold text-blue-950 mb-3">Priority checklist</p>
        <ul className="space-y-2">
          {topTasks.map((task, i) => (
            <li key={i} className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2">
              <svg className="w-4 h-4 text-green-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-blue-900">{task}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-3 rounded-xl transition-colors">
        Open Detailed Report
      </button>
    </section>
  );
};

export default ExampleComponent;
