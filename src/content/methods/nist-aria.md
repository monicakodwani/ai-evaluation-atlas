---
id: nist-aria
title: NIST ARIA
aliases:
  - Assessing Risks and Impacts of AI
  - ARIA
entry_type: method
status: needs-verification
content_status: outline
summary: >-
  A NIST evaluation program measuring risks and impacts of LLM-based
  applications in realistic contexts through three escalating levels —
  model testing, red teaming, and field testing with human participants.
  Its only completed round is the ARIA 0.1 pilot (five organizations,
  seven applications, three scenarios), reported in NIST AI 700-2
  (November 2025); it is explicitly not a certification program.
definition: >-
  ARIA is a program, not a benchmark: a sector- and task-agnostic exercise
  run by NIST's Information Technology Laboratory that aims to measure
  "technical and contextual robustness" of LLM applications beyond
  performance and accuracy. The pilot's three scenarios (TV Spoilers, Meal
  Planner, Pathfinder) were assessed through dialogue annotation, tester
  questionnaires, and "measurement trees" linking low-level observations
  to higher-level claims about application validity. No post-pilot round
  had been announced as of 11 November 2026, and the program appears to be
  between iterations — an inference from stale page milestones, not an
  official statement.
why_it_matters: >-
  ARIA is the clearest US government articulation that benchmark scores
  alone do not establish real-world safety: its design escalates from
  model testing to red teaming to field testing precisely because each
  level captures risks the previous one misses. Its pilot-only status is
  equally instructive — contextual evaluation at program scale is hard
  enough that the US metrology agency has run it exactly once.
claimed_constructs:
  - robustness
  - safety
  - social-impact
evaluation_levels:
  - model
  - application
  - interaction
lifecycle_stages:
  - pre-deployment
purposes:
  - risk-discovery
  - scientific-understanding
  - safety-assurance
evaluator_types:
  - domain-expert
  - end-user
evaluator_filters:
  - human
  - expert
environments:
  - laboratory
  - simulation
scoring_mechanisms:
  - human-rating
  - expert-adjudication
evidence_class: emerging
maturity: experimental
organization: National Institute of Standards and Technology
human_involvement: human-led
strengths:
  - Escalating three-level design makes the gap between model-level and
    application-in-context evidence explicit and measurable.
  - Field testing with human participants captures interaction risks that
    no automated benchmark reaches.
  - Measurement trees make the chain from raw annotation to validity
    claim inspectable rather than implicit.
  - Run by a metrology agency with the stated aim of producing reusable
    guidelines, methods, and metrics rather than vendor scores.
limitations:
  - A single pilot — five organizations, seven applications, three
    scenarios — is far too small a base to generalize about LLM
    application risk.
  - Scenario-based field testing with recruited testers is still a
    controlled exercise, not deployment evidence.
  - No announced follow-up round; the program's continuation is uncertain.
  - Explicitly not a certification program — participation establishes no
    compliance status.
appropriate_claims:
  - A participating application was evaluated under the pilot's protocol
    at the stated levels, with results assessed by dialogue annotation and
    tester questionnaires.
  - The pilot demonstrated feasibility of combining expert annotation and
    human tester data in one evaluation design.
inappropriate_claims:
  - That ARIA participation certifies or approves an application — NIST
    states it is not a certification program.
  - That pilot results characterize the risk of LLM applications
    generally, given the pilot's scale.
  - That ARIA's field testing measures real-world deployment outcomes —
    scenarios are constructed and participants recruited.
evidence_produced: >-
  Program-level evaluation evidence about LLM applications in constructed
  realistic scenarios: annotated dialogues, tester questionnaire data, and
  measurement-tree analyses — methodology evidence first, application
  evidence second.
combine_with:
  - Standard capability benchmarks, which ARIA's design deliberately goes
    beyond but does not replace.
  - Post-deployment monitoring, since ARIA's field level is still
    pre-deployment and scenario-bound.
  - Red-teaming programs with explicit threat models, which give ARIA's
    middle level sharper content.
misconceptions:
  - misconception: ARIA certifies that an LLM application is safe.
    reality: >-
      NIST states ARIA is not a certification program; it is an evaluation
      exercise meant to inform future guidelines, methods, and metrics.
  - misconception: ARIA's "field testing" means testing in live deployment.
    reality: >-
      The pilot's field level used constructed scenarios with recruited
      human testers — closer to a controlled user study than to telemetry
      from production use.
questions_to_ask:
  - Which of the three levels did an application actually go through, and
    what did each level find?
  - How were scenarios chosen, and what deployment contexts do they fail
    to represent?
  - Has anything from the pilot's methodology been reused or validated
    outside the pilot?
  - Is the program active, or is a 2025 pilot being cited as if it were an
    ongoing evaluation regime?
related_entries:
  - tevv-athlon
  - nist-ai-rmf
  - red-teaming
related_guides:
  - how-governments-evaluate-ai
  - evaluating-agents-and-tool-use
primary_sources:
  - src-nist-2025-aria-pilot
secondary_sources: []
source_status: >-
  Drafted from November 2026 research that fetched the ARIA program page
  and the NIST AI 700-2 publication page directly. The full pilot report
  PDF was not read, so quantitative findings are deliberately not stated.
  "Between iterations" is an inference from the program page's stale
  milestones and should not be presented as an official status.
created: 2026-11-11
last_reviewed: 2026-11-11
reviewer: Monica Kodwani
tags:
  - nist
  - field-testing
  - pilot-program
featured: false
---

ARIA's pedagogical value is its shape: three levels, each existing because
the one below it is insufficient. Model testing asks what the system can
do; red teaming asks what an adversary can make it do; field testing asks
what happens when people actually use it. The pilot report's own framing —
feasibility demonstrated, certification disclaimed — is a model of the
honest register this Atlas tries to teach readers to demand.

### A pilot is evidence about method, not about systems

What ARIA 0.1 established is that expert annotation and human-tester data
can be combined into one transparent measurement structure. What it did
not establish is anything general about the safety of LLM applications:
seven applications in three constructed scenarios cannot carry that
weight, and NIST does not claim otherwise. Citations of ARIA should be
checked for which of those two claims they are actually making.
