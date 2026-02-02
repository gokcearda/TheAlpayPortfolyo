export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-12 leading-tight">
        How I Think About Data Work
      </h1>

      <div className="space-y-12 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Most analysis fails before it starts
          </h2>
          <p className="mb-4">
            The hardest part isn't the SQL or the statistics. It's figuring out what question
            actually matters to the business, and whether the data can answer it honestly.
          </p>
          <p>
            I've seen too many dashboards that measure everything and answer nothing.
            Good analysis starts with a clear decision that needs to be made, then works backward.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Uncertainty is information
          </h2>
          <p className="mb-4">
            When I say "the data suggests X, but we're missing Y," that's not a failure of analysis.
            That's exactly what stakeholders need to know. Confidence intervals matter. Sample bias matters.
            Proxy metrics matter.
          </p>
          <p>
            The goal isn't to eliminate uncertainty. It's to quantify it well enough that someone
            can make a better decision than they would have without the analysis.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Speed is a feature
          </h2>
          <p className="mb-4">
            A rough answer today beats a perfect answer next quarter. I optimize for iteration speed:
            quick cuts of the data, directional insights, then deeper dives only where they matter.
          </p>
          <p>
            This means saying no to requests that won't change a decision. It means building
            tools that make the next analysis faster. And it means knowing when "good enough"
            is actually good enough.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Context beats credentials
          </h2>
          <p className="mb-4">
            I've worked across SaaS, marketplace, and operational analytics. Each domain has
            different rhythms, different data quality issues, different stakeholder needs.
          </p>
          <p>
            What transfers isn't the specific models or dashboards. It's the habit of asking
            "what's actually happening here?" and the discipline to find out.
          </p>
        </section>

        <section className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Background
          </h2>
          <p className="mb-4">
            Previously: Analytics at a Series B SaaS company, operations analytics at a logistics
            startup, strategy consulting. Comfortable with SQL, Python, and communicating with
            non-technical executives.
          </p>
          <p>
            Currently open to roles where data work directly influences product or business strategy,
            and where I can work with people who care more about insight than output.
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 p-6 rounded">
          <p className="text-sm text-gray-600">
            <strong className="text-gray-900">Contact:</strong> sarah.chen@example.com
          </p>
        </section>
      </div>
    </div>
  );
}
