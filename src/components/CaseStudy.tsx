import { CaseStudyData } from '../data/caseStudies';

interface CaseStudyProps {
  study: CaseStudyData;
}

export default function CaseStudy({ study }: CaseStudyProps) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {study.title}
        </h1>
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          {study.context}
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-4">
          Problem Statement
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-900 leading-relaxed whitespace-pre-line">
            {study.problemStatement}
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-4">
          Constraints & Assumptions
        </h2>
        <ul className="space-y-3">
          {study.constraints.map((constraint, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-teal-600 mr-3 mt-1">•</span>
              <span className="text-gray-700 leading-relaxed">{constraint}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-4">
          Analytical Approach
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-900 leading-relaxed whitespace-pre-line">
            {study.approach}
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-4">
          Key Findings
        </h2>
        <ul className="space-y-4">
          {study.findings.map((finding, idx) => (
            <li key={idx} className="border-l-2 border-teal-600 pl-6">
              <p className="text-gray-900 leading-relaxed">{finding}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-4">
          Decision / Recommendation
        </h2>
        <div className="bg-gray-50 border border-gray-200 p-6 rounded">
          <p className="text-gray-900 leading-relaxed whitespace-pre-line">
            {study.decision}
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-4">
          What I Would Do Next
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {study.nextSteps}
          </p>
        </div>
      </section>
    </article>
  );
}
