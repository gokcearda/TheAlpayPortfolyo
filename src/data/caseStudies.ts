export interface CaseStudyData {
  id: string;
  title: string;
  context: string;
  problemOneLine: string;
  problemStatement: string;
  constraints: string[];
  approach: string;
  findings: string[];
  decision: string;
  nextSteps: string;
}

export const caseStudies: CaseStudyData[] = [
  {
    id: 'pricing-experiment',
    title: 'Should We Discount Annual Plans?',
    context: 'SaaS Pricing Strategy, 6-week timeline',
    problemOneLine:
      'Leadership wanted to offer a 20% discount on annual plans to improve cash flow, but we needed to know if it would cannibalize monthly revenue.',
    problemStatement: `The company was burning $2M/month with 14 months of runway. Finance proposed a 20% discount on annual subscriptions to pull revenue forward and extend runway.

Marketing loved it. Sales loved it. But no one had modeled whether existing monthly customers would downgrade their effective price by switching, or whether the discount would attract genuinely new buyers.

The real question wasn't "will this increase annual plan adoption?" It was "will this improve our financial position, or just trade margin for timing?"`,
    constraints: [
      'Only 8 months of comparable subscription data (product launched recently)',
      'No prior discount campaigns to use as baseline',
      'Could not run an A/B test - leadership wanted a single unified offer',
      'Self-selection bias: annual buyers are structurally different from monthly',
      'Monthly subscribers could switch mid-contract, making elasticity estimates unreliable',
    ],
    approach: `I treated this as a segmentation problem, not a pricing problem.

First, I looked at historical monthly-to-annual conversion behavior. About 12% of monthly users eventually switched to annual within 6 months, suggesting a natural upgrade path. These converters had 40% higher feature usage than average.

Then I segmented the user base by three proxy variables: tenure, feature usage, and plan size. I estimated the share of monthly users likely to switch to annual under the new pricing (high-intent switchers), versus those who wouldn't have converted otherwise (incremental buyers).

For each segment, I calculated net revenue impact over 12 months under three scenarios: no discount, 15% discount, and 20% discount. I assumed pessimistic conversion rates for incremental buyers and optimistic rates for cannibalized monthly revenue.

I also flagged that this analysis couldn't account for long-term brand perception of discounting, or competitive response.`,
    findings: [
      'At 20% discount, we would likely convert 35-40% of monthly customers to annual, but 60% of those would have converted anyway at full price within 12 months',
      'Net financial impact: $400K pulled forward in cash, but $280K lost in lifetime margin from cannibalization',
      'The runway extension was real but modest - about 6 weeks',
      'High-usage customers (our best retention segment) were least price-sensitive; they were converting to annual already',
    ],
    decision: `I recommended against the 20% discount.

Instead, I proposed a targeted offer: 10% off annual plans, available only to customers in their first 90 days (new buyers and recent upgrades). This would minimize cannibalization of likely converters while still capturing incremental cash from price-sensitive early-stage customers.

Finance accepted the recommendation. We implemented the modified offer and saw a 22% increase in early annual conversions with minimal impact on full-price renewals from mature customers.

The runway extension was smaller than originally hoped (~3 weeks vs 6), but we didn't erode margin on our best customers.`,
    nextSteps: `With more time, I'd want to:

• Run a controlled experiment on a subset of users to validate elasticity assumptions
• Analyze churn and engagement patterns 6–12 months post-purchase to see if discounted customers behave differently
• Model the long-term effect of discount conditioning on willingness to pay
• Build a more sophisticated LTV model that accounts for plan-switching dynamics`,
  },
  {
    id: 'churn-attribution',
    title: 'Why Are Enterprise Customers Churning?',
    context: 'Customer Success Analytics, 4-week project',
    problemOneLine:
      'Enterprise churn doubled in Q2, but the CRM data blamed "budget cuts" for everything - I needed to find the real patterns.',
    problemStatement: `Enterprise churn (contracts >$50K ARR) went from 8% to 16% quarter-over-quarter. The CS team flagged it in weekly reviews, but their narrative was all over the map: economic downturn, product-market fit issues, bad onboarding.

When I pulled CRM churn reasons, 70% were tagged "budget constraints." That told me nothing actionable.

The real question was: what differentiates the customers who churned from those who renewed? And could we have predicted it early enough to intervene?`,
    constraints: [
      'Small sample size: only 38 enterprise customers total, 6 churned in Q2',
      'Survivorship bias in feature usage logs (churned customers stop logging in weeks before contract end)',
      'CRM data quality issues: churn reasons were inconsistent and often added retroactively',
      'Cannot survey churned customers (legal/NDA concerns)',
      'No product analytics instrumentation for enterprise-specific workflows',
    ],
    approach: `Since I couldn't rely on stated reasons, I reconstructed behavior from three data sources: support tickets, product usage logs, and CS activity notes.

I manually coded the last 90 days of interactions for all 38 customers across six dimensions: ticket severity, response time, feature adoption depth, executive sponsor engagement, CS meeting frequency, and onboarding completion.

Then I compared the churned vs. renewed cohorts on each dimension. I wasn't trying to build a predictive model (sample size too small). I was looking for patterns that were both statistically notable and operationally meaningful.

I also interviewed three CS reps to validate whether the patterns matched their intuition.`,
    findings: [
      'All six churned customers had unresolved P1 tickets in the 60 days before renewal; only 1 of 32 retained customers did',
      'Churned customers averaged 2.1 features actively used vs. 4.8 for retained (despite similar contract sizes)',
      'Five of six churned customers never had an executive sponsor attend a business review meeting',
      '"Budget constraints" were real, but they were downstream of low product value: customers who weren\'t getting ROI found other priorities',
    ],
    decision: `The problem wasn't budget—it was that we weren't demonstrating value to economic buyers.

I recommended three changes:
1. Escalation protocol: any P1 ticket unresolved for >14 days triggers exec involvement
2. CS playbook revision: require executive sponsor engagement within first 60 days or flag account as high-risk
3. Leading indicator dashboard: track feature adoption breadth and ticket resolution speed as churn predictors (not vanity metrics like login frequency)

CS leadership implemented all three. In Q3, we intervened on 4 at-risk accounts using the new playbook; 3 renewed.`,
    nextSteps: `To make this truly predictive, I'd want to:

• Instrument product analytics for enterprise-specific workflows to get cleaner usage data
• Build a proper health score model once we have 6+ months of data under the new playbook
• Conduct win-loss interviews with a standardized framework (requires exec buy-in)
• Track whether early exec engagement actually drives value realization, or just correlates with better-fit customers`,
  },
  {
    id: 'attribution-model',
    title: 'Is Our Marketing Attribution Lying to Us?',
    context: 'Marketing Analytics, 3-week analysis',
    problemOneLine:
      'Last-touch attribution gave all credit to bottom-funnel ads, so we kept spending there - but when we cut mid-funnel, conversions dropped.',
    problemStatement: `Marketing was using last-touch attribution to allocate a $200K/month budget. Google Search got 60% of the credit. Content and display got almost nothing.

But when we paused a content campaign to reallocate spend to search, conversions dropped 18%. Either attribution was wrong, or something else was going on.

The question wasn't "which attribution model is right?" (none of them are). It was "how do we allocate budget when we don't have clean incrementality data?"`,
    constraints: [
      'No budget for a proper media mix model or incrementality testing',
      'Multi-touch attribution requires user-level tracking we did not have',
      'Long consideration cycles (30-90 days) made A/B tests impractical',
      'Executive team wanted a single "source of truth" number per channel',
      'Historical data was muddied by inconsistent campaign tagging',
    ],
    approach: `I didn't try to build a perfect model. I tried to build a useful heuristic.

First, I analyzed user paths for all converters in the prior 90 days, grouping them into journey archetypes (direct converters, researchers, retarget-responsive, etc.). This showed that 68% of converters touched 3+ channels before signup.

Then I estimated an "assist value" for each channel based on its position in multi-touch journeys. Channels that appeared early in long journeys got partial credit. Channels that closed deals got more credit, but not 100%.

I didn't pretend this was scientifically rigorous. I explicitly framed it as "directionally useful given our constraints" and showed sensitivity analyses: what if we're wrong by 20%? 50%?

Finally, I recommended a holdout test on one channel to validate incrementality.`,
    findings: [
      'Content drove 41% of first touches but only 3% of last touches - it was invisible in last-touch attribution',
      'Google Search was genuinely effective, but not 60%-of-budget effective; much of its volume was branded search from users already aware',
      'Display ads had near-zero last-touch conversions but appeared in 52% of converting journeys; likely playing an awareness role',
      'Reallocating spend based on last-touch would have systematically defunded top-of-funnel channels, creating a slow collapse in new user acquisition',
    ],
    decision: `I proposed a revised allocation using weighted multi-touch attribution, with explicit acknowledgment of uncertainty:

• Search: 40% (down from 60%)
• Content: 25% (up from 8%)
• Display: 20% (up from 12%)
• Retargeting: 15% (unchanged)

I also recommended running a 2-week holdout on display to measure true incrementality, with the understanding that we'd adjust again based on results.

Leadership accepted the reallocation. Over the next quarter, cost-per-acquisition dropped 14% and total conversions increased 9%.`,
    nextSteps: `To improve this over time:

• Implement proper incrementality testing (geo-based holdouts or periodic channel pauses)
• Build a probabilistic attribution model that shows uncertainty ranges, not false precision
• Track leading indicators (traffic, engagement) separately from lagging indicators (conversions, revenue)
• Invest in better campaign tagging and user-level tracking (privacy-compliant)`,
  },
  {
    id: 'warehouse-efficiency',
    title: 'Which Warehouse Process Is the Bottleneck?',
    context: 'Operations Analytics, 2-week sprint',
    problemOneLine:
      'Order fulfillment was missing SLA targets, but ops did not know if the problem was picking, packing, or shipping - so they wanted to hire everywhere.',
    problemStatement: `A logistics client was missing delivery SLA on 22% of orders, up from 11% the prior quarter. Operations leadership wanted to hire more staff across all three fulfillment stages (pick, pack, ship).

But labor cost was already 34% of revenue. Adding headcount without knowing the actual bottleneck would make the unit economics worse.

The question wasn't "are we understaffed?" It was "where in the process are we losing time, and is it a capacity problem or a process problem?"`,
    constraints: [
      'Warehouse management system data was incomplete (timestamps missing for 30% of orders)',
      'Could not observe operations in person (remote engagement)',
      'Peak season starting in 3 weeks - needed recommendations fast',
      'Three different warehouse locations with different layouts and processes',
      'No baseline data on "good" performance; this was the client first scaling phase',
    ],
    approach: `I focused on complete data for the 70% of orders with full timestamps, then validated patterns with ops managers.

First, I broke down total cycle time into stage durations: pick time, pack time, and ship time. I calculated percentiles (p50, p75, p95) for each stage to see where variance was highest.

Then I segmented by order characteristics: size, SKU count, item weight, destination zone. This revealed whether delays were systemic or driven by specific order types.

Finally, I looked at throughput by hour and day to see if bottlenecks were capacity constraints (consistent) or process issues (variable).

I presented findings as "what the data suggests" vs. "what we'd need to validate," making it clear where I was extrapolating.`,
    findings: [
      'Picking was the bottleneck: p95 pick time was 3.2x the p50, while pack and ship were more consistent',
      'The variance was driven by multi-SKU orders: orders with 5+ items took exponentially longer, not linearly longer',
      'Peak delay hours were mid-afternoon, suggesting handoff inefficiencies between shifts',
      'Two of three warehouses had no bin location optimization; pickers were walking 40% farther than necessary',
    ],
    decision: `I recommended against broad hiring.

Instead:
1. Optimize warehouse layout at the two underperforming locations (estimated 15-20% pick time reduction)
2. Implement a batching system for multi-SKU orders to reduce walking distance
3. Stagger shift handoffs by 30 minutes to smooth throughput
4. Hire 2 additional pickers (not packers or shippers) at the highest-volume location only

Operations implemented recommendations over 10 days. SLA performance improved to 91% without the originally planned headcount increase.`,
    nextSteps: `For ongoing optimization:

• Implement full timestamp tracking across all orders to improve data quality
• Build a real-time bottleneck dashboard for ops managers
• Run time-motion studies on high-variance order types to find process improvements
• Model long-term capacity needs based on projected order growth and complexity`,
  },
];
