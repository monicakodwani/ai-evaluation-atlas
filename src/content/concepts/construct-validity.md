---
id: construct-validity
title: Construct validity
aliases:
  - Measurement validity
entry_type: concept
status: needs-verification
content_status: outline
summary: >-
  Whether an evaluation instrument actually measures the property it is named
  after. In AI evaluation, construct validity is usually asserted by the
  instrument's title rather than established by evidence.
definition: >-
  Construct validity is the degree to which an instrument measures the
  construct it claims to measure, rather than something else that happens to
  co-vary with it. Measurement science decomposes it into a family of
  evidence types — content validity (do the items adequately represent the
  domain?), criterion validity (do scores predict an external outcome?),
  convergent validity (do related instruments agree?), and discriminant
  validity (is the instrument distinct from unrelated constructs?).
why_it_matters: >-
  Benchmark scores are routinely treated as measurements of latent constructs
  such as "reasoning" or "safety" without any of these evidence types. The
  measurement-science literature on AI evaluation treats this gap as the
  field's central unsolved problem, and it is the reason a rising score
  cannot, by itself, support a claim that the named property improved.
claimed_constructs: []
evaluation_levels: []
lifecycle_stages:
  - design
  - pre-deployment
purposes:
  - scientific-understanding
  - model-comparison
evaluator_types: []
evaluator_filters: []
environments: []
scoring_mechanisms: []
evidence_class: research-convention
maturity: emerging
strengths:
  - Gives precise vocabulary for the gap between an instrument's name and
    what its scores demonstrate.
  - Imports a mature evidence framework (content, criterion, convergent,
    discriminant) from psychometrics rather than inventing one.
  - Identifies two distinct failure modes — construct underrepresentation
    and construct-irrelevant variance — that would otherwise be conflated.
limitations:
  - Well established as a critique of AI evaluation but rarely
    operationalized; there is no accepted procedure for validating an AI
    benchmark against its named construct.
  - Criterion validity requires an external outcome to predict, which is
    often unavailable or contested for constructs like "safety" or
    "alignment."
  - Conceptual uptake has outpaced operational adoption; frameworks exist
    on paper more than in evaluation practice.
appropriate_claims:
  - This instrument has (or lacks) specific validity evidence — content,
    criterion, convergent, or discriminant — for the construct it names.
  - A score change on this instrument shows change on the instrument, and
    only with separate validity evidence a change in the named property.
  - Two instruments that disagree about the same named construct cannot both
    be valid measures of it without further explanation.
inappropriate_claims:
  - That a benchmark measures its named construct because it is widely
    adopted or heavily cited — adoption is not validity evidence.
  - That titling a dataset "reasoning" or "truthfulness" makes its score a
    measurement of reasoning or truthfulness.
  - That a single correlation between two benchmarks establishes convergent
    validity across models, domains, or deployment contexts.
misconceptions:
  - misconception: If a benchmark is widely used and cited, it must be measuring something real.
    reality: >-
      Adoption measures convenience and coordination, not validity. A heavily
      cited instrument can lack every kind of validity evidence and still
      dominate leaderboards.
  - misconception: Validity is a yes-or-no property a benchmark either has or lacks.
    reality: >-
      Validity is an accumulating case built from several evidence types for
      a specific use. The same instrument can be valid for one claim and
      invalid for another.
questions_to_ask:
  - What construct does this instrument claim to measure, and where is that
    construct defined independently of the item set?
  - What validity evidence — content, criterion, convergent, discriminant —
    is offered beyond the benchmark's name?
  - Could the score be moved by construct-irrelevant factors such as answer
    format, verbosity, option position, or prompt template?
  - Which part of the construct do the items not cover, and would the claim
    survive if that part were tested?
  - If two instruments for the same named construct disagree, which one does
    this claim rely on, and why that one?
debates:
  - question: Should AI evaluation import psychometric validity theory wholesale, or build its own measurement framework?
    positions:
      - label: Import the framework
        view: >-
          Validity evidence types describe the logic of inferring a property
          from a score, and that logic is medium-independent. The framework
          is mature, battle-tested, and AI evaluation's problems — proxy
          substitution, construct-irrelevant variance — are exactly the ones
          it was built to catch.
      - label: Adapt rather than transplant
        view: >-
          Psychometrics assumes stable populations of test-takers and
          trait-like constructs. Models are not a population, their behavior
          shifts with prompts and versions, and constructs like "capability"
          may not be traits at all — so the tools need rebuilding, not
          copying.
    note: >-
      Both positions agree current practice supplies almost no validity
      evidence of any kind; the disagreement is about which toolkit to
      build, not whether one is needed.
validity_evidence: >-
  Working research reports characterize construct validity in AI evaluation
  as usually assumed rather than established; a large meta-review of
  benchmark papers reportedly found contested or unclear construct
  definitions to be common. Specific figures need verification.
known_failure_modes:
  - Construct underrepresentation — the instrument samples only the easily
    scored part of a property, such as mechanically checkable instructions
    standing in for instruction following.
  - Construct-irrelevant variance — scores driven by response format,
    verbosity, answer position, prompt template, or judge taste rather than
    the intended ability.
  - Proxy substitution — multiple-choice hazardous knowledge read as
    catastrophic-misuse risk, or refusal rate read as safety.
related_entries:
  - reliability
  - ecological-validity
  - benchmark-based-evaluation
  - benchmark-contamination
  - benchmark-saturation
  - ai-judge-bias
  - mmlu
  - truthfulqa
related_guides:
  - evaluation-is-measurement
  - benchmarks-and-their-limits
  - what-counts-as-ai-evaluation
primary_sources:
  - src-weidinger-2025-evaluation-science
secondary_sources:
  - src-bean-2025-benchmark-review
source_status: >-
  Drafted from working research reports; the evaluation-science position and
  meta-review figures are cited there but not yet checked against primary
  sources.
created: 2026-07-31
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
tags:
  - measurement
  - validity
  - psychometrics
featured: false
---

Construct validity is a concept AI evaluation imported, late and partially,
from psychometrics and the social sciences. The core discipline it imposes
is a separation the field routinely skips — between an instrument (a dataset
and scoring rule) and a construct (the property the instrument is named
after). A benchmark author can demonstrate that items are difficult and
scores are repeatable; whether those scores measure "reasoning" is a
separate empirical question, answered by validity evidence, not by the
benchmark's title.

### Current state in AI evaluation

Working research reports converge on a blunt assessment. Construct validity
is usually assumed, not established. Benchmark papers commonly assert a
construct without content, criterion, convergent, or discriminant evidence,
and the emerging "evaluation science" position argues that AI evaluation
needs to adopt this evidence framework wholesale rather than treating
scores as self-validating. The two standard failure modes are both
documented in the reports. Construct underrepresentation, where an
instrument covers only the scoreable fraction of a property, and
construct-irrelevant variance, where scores move with format, ordering, and
style rather than ability. Both can affect the same instrument at once.
