import { caseStudies } from '../data/caseStudies';

interface HomeProps {
  onViewCase: (id: string) => void;
}

export default function Home({ onViewCase }: HomeProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
          I turn ambiguous questions into decisions backed by evidence.
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Most data work isn't about fancy models. It's about framing the right question,
          knowing what you can't measure, and being honest about uncertainty.
        </p>
      </div>

      <section>
        <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-8">
          Selected Work
        </h2>
        <div className="space-y-12">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => onViewCase(study.id)}
              className="block w-full text-left group"
            >
              <div className="border-l-2 border-gray-200 pl-6 group-hover:border-teal-600 transition-colors">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {study.problemOneLine}
                </p>
                <span className="inline-block mt-4 text-sm text-teal-600 font-medium">
                  View case study →
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
