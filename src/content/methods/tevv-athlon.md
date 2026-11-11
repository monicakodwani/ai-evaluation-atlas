---
id: tevv-athlon
title: TEVV-Athlon
aliases:
  - NIST AI 200-2
  - TEVV-Athlon Framework for Evaluating AI Systems
entry_type: method
status: needs-verification
content_status: outline
summary: >-
  A draft NIST framework (NIST AI 200-2, Initial Public Draft, August
  2026) giving organizations a four-stage method for designing customized,
  multi-event evaluations of AI systems — composing benchmarks, red
  teaming, and field testing into one assessment the way a triathlon
  composes events. It is evaluation-design methodology, not a test suite.
definition: >-
  TEVV-Athlon is meta-evaluation guidance: a method for deciding what to
  measure and how to combine evidence, applicable from statistical ML to
  LLMs and agentic systems. Its four stages are Articulate & Organize,
  Define & Construct, Apply & Measure, and Synthesize & Interrogate, built
  on three components — Metrology Blocks (the key concepts or metrics an
  evaluation aims to assess), Events (the activities producing evidence
  for each Block), and a Toolbox (methods and instruments for eliciting,
  collecting, and analyzing information from Events). Appendices catalog
  selected benchmarks, red-teaming methods, and user/field-testing
  methods. It remains an Initial Public Draft: the comment period closed
  6 October 2026 and no final version had been published as of
  11 November 2026.
why_it_matters: >-
  TEVV-Athlon is the closest thing to a general-purpose "how to design an
  AI evaluation" methodology any government has published, and it
  explicitly operationalizes the measurement layer the NIST AI RMF calls
  for but never specifies. Reading it teaches the composition problem at
  the heart of serious evaluation: no single event — benchmark, red team,
  or field test — establishes fitness for purpose on its own.
claimed_constructs: []
evaluation_levels:
  - model
  - application
  - task
  - agent-trajectory
lifecycle_stages:
  - design
  - pre-deployment
  - deployment
purposes:
  - risk-discovery
  - release-decision
  - procurement
  - scientific-understanding
evaluator_types:
  - model-developer
  - application-developer
  - domain-expert
evaluator_filters:
  - expert
environments:
  - public-benchmark
  - laboratory
  - real-world-deployment
scoring_mechanisms:
  - reference-based-metric
  - expert-adjudication
  - observed-outcome
evidence_class: proposed
maturity: draft
organization: National Institute of Standards and Technology
strengths:
  - Treats evaluation design as the unit of work — what to measure, which
    activities produce evidence for it, and how results compose — rather
    than treating any single score as the evaluation.
  - Explicitly spans benchmarks, red teaming, and field testing, with
    appendices cataloguing concrete instances of each.
  - Connects to the AI RMF in both directions — Map and Govern feed
    Stage 1, and Stage 4 outputs feed Manage — giving the RMF's Measure
    function actual content.
  - The Metrology Block vocabulary makes construct choice explicit, which
    most evaluation practice leaves implicit.
limitations:
  - An Initial Public Draft whose final form, and whether a final form
    ever appears, is unknown — it cannot yet anchor a compliance or
    procurement claim.
  - Prescribes a design process, not metrics or thresholds; two
    organizations can both "follow TEVV-Athlon" and produce
    incommensurable evaluations.
  - No published pilots or worked deployments were found beyond the
    draft's own illustrative example.
  - The draft carries no conformity mechanism; nothing checks whether a
    claimed TEVV-Athlon evaluation was designed well.
appropriate_claims:
  - An evaluation was designed using the framework's four stages, with
    documented Metrology Blocks, Events, and tool selections.
  - Multiple evidence-producing activities were composed into one
    assessment design and the composition was documented.
inappropriate_claims:
  - That a system "passed" TEVV-Athlon — the framework defines no tests,
    metrics, or thresholds that a system could pass or fail.
  - That following the framework makes an evaluation valid; the framework
    structures design choices but does not validate them.
  - That the framework is finalized NIST guidance — it is a draft open to
    change.
evidence_produced: >-
  An evaluation design — documented Metrology Blocks, the Events chosen to
  produce evidence for each, and the synthesis plan — plus whatever
  evidence those events then generate. The framework itself produces
  documentation of design rationale, not measurements.
combine_with:
  - The NIST AI RMF, which supplies the organizational risk context the
    framework's Stage 1 expects as input.
  - Specific benchmark, red-teaming, and field-testing methods — the
    framework only organizes them.
  - Independent review of the evaluation design, since the framework
    attaches no check on design quality.
misconceptions:
  - misconception: TEVV-Athlon is a test suite or benchmark you can run.
    reality: >-
      It is a method for designing evaluations. Running it produces an
      assessment plan; the measurements come from whatever events the plan
      selects.
  - misconception: It is current, final NIST guidance.
    reality: >-
      It is an Initial Public Draft (August 2026) whose comment period
      closed in October 2026; no final version existed as of November
      2026, and the content may change.
questions_to_ask:
  - Which Metrology Blocks were chosen, and what was deliberately left
    unmeasured?
  - Does each claimed construct have at least one Event producing evidence
    for it, or do several Blocks rest on one activity?
  - How were results across events synthesized — and would a different
    synthesis change the conclusion?
  - Is the claim anchored to the draft as it stood, given that the
    framework may change before finalization?
related_entries:
  - nist-ai-rmf
  - nist-aria
  - red-teaming
  - standards-and-assurance
related_guides:
  - how-governments-evaluate-ai
  - what-counts-as-ai-evaluation
primary_sources:
  - src-nist-2026-tevv-athlon
secondary_sources: []
source_status: >-
  Drafted from November 2026 research that fetched the NIST program page
  and the draft PDF directly; stage names and component definitions are
  from the PDF text. Draft status is the defining fact of this entry:
  re-verify before citing, since NIST pages were mid-rebrand under the
  September 2026 "Super Intelligence" terminology order and URLs may
  change.
created: 2026-11-11
last_reviewed: 2026-11-11
reviewer: Monica Kodwani
tags:
  - nist
  - evaluation-design
  - draft-framework
featured: false
---

TEVV-Athlon matters to the Atlas less as a standard to comply with than as
a government-published answer to a methodological question this Atlas
keeps returning to: how do you compose benchmarks, red teaming, and field
testing into one defensible assessment? Its triathlon metaphor is doing
real work — a system, like an athlete, is judged across multiple events
because no single event predicts overall fitness for purpose.

### A draft, and deliberately read as one

The framework's own status is a teaching point. It reached Initial Public
Draft in August 2026, closed comments in October, and had no final version
as of November 2026. A policymaker citing "the NIST evaluation framework"
should know that the US government's most general evaluation-design
methodology is, at this writing, a proposal — evidence of where official
thinking is heading, not settled practice anyone has been audited against.
