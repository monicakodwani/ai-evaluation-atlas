---
id: swe-bench
title: SWE-bench
aliases: []
entry_type: benchmark
status: needs-verification
content_status: outline
summary: >-
  An execution-based software-engineering benchmark built from real
  repository issues. A system must produce a code change that makes the
  repository's tests pass, and it is scored by running those tests.
definition: >-
  SWE-bench draws its items from real GitHub repository issues. A model or
  agent is given the repository and the issue and must modify the codebase;
  the resolved rate is computed by executing the associated test suite. The
  working reports describe variants within the family, including SWE-bench
  Verified (for which contamination has been flagged) and SWE-bench Pro
  (described as designed to resist contamination), and treat the family as
  a leading instrument for coding-agent comparison.
claimed_constructs:
  - capability
evaluation_levels:
  - task
  - agent-trajectory
lifecycle_stages:
  - pre-deployment
  - release
purposes:
  - model-comparison
  - product-selection
  - scientific-understanding
evaluator_types:
  - model-developer
  - application-developer
  - independent-researcher
evaluator_filters:
  - automated-verifier
environments:
  - public-benchmark
  - sandbox
scoring_mechanisms:
  - execution-based
evidence_class: research-convention
maturity: common-contested
human_involvement: none
access_model: fully-open
benchmark_family: SWE-bench
strengths:
  - Execution against each item's test suite gives a checkable pass/fail
    signal rather than a judgment call.
  - Items derive from real software artifacts, which gives higher task
    realism than synthetic function-writing benchmarks.
  - Working reports describe it as widely reported in frontier releases,
    enabling comparison of coding agents on a shared instrument.
limitations:
  - Scores confound the model with its scaffold — analyses cited in the
    working reports find scaffolding choices can shift results by more than
    the gap between model generations.
  - The evaluation pipeline is reportedly gameable — one 2026 study is
    reported to have made the full Verified item set pass by editing a
    test-configuration file rather than solving tasks (unverified).
  - Source issues and their fixes are public repository history, so
    training contamination is plausible and hard to rule out.
  - Test suites are incomplete oracles — passing tests is not the same as a
    correct, secure, or maintainable fix.
appropriate_claims:
  - Under a stated scaffold, model version, budget, and variant, system A
    resolved a larger share of this issue set than system B at the time of
    testing.
  - An intervention changed the resolved rate on this instrument, holding
    the harness, variant, and settings fixed.
  - The reported score reflects execution against each item's tests, an
    auditable outcome for those items.
inappropriate_claims:
  - That a resolved rate establishes general software-engineering
    competence or readiness for unsupervised production coding.
  - That the score is attributable to the model alone, when the scaffold,
    retries, and budget co-produce it and are often unreported.
  - That a high score could not be an artifact of pipeline gaming or of
    memorized public fixes — both are reported in the working literature
    and need checking per result.
  - That resolving these benchmark issues transfers to an organization's
    own repositories, languages, tooling, and review standards.
known_failure_modes:
  - Evaluation-pipeline gaming, where the agent manipulates test
    configuration instead of solving the task.
  - Contamination from public issue and patch history present in training
    corpora.
  - Scaffold and budget differences reported as if they were model
    differences.
related_entries:
  - benchmark-based-evaluation
  - agent-trajectory-evaluation
  - humaneval
  - livebench
  - osworld
  - benchmark-contamination
related_guides:
  - benchmarks-and-their-limits
  - evaluating-agents-and-tool-use
primary_sources: []
secondary_sources: []
source_status: >-
  Drafted from working research reports only. The reports attribute the
  benchmark to Jimenez et al. ("SWE-bench: Can Language Models Resolve
  Real-World GitHub Issues?", 2023/2024); no source record has been created
  or checked. The gaming demonstration (attributed in the reports to a UC
  Berkeley team, 2026, including a roughly ten-line test-config edit
  passing all Verified items) and the scaffold-sensitivity findings are
  unverified figures and must be confirmed against primary sources before
  citation.
created: 2026-07-31
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
tags:
  - code
  - software-engineering
  - agents
  - execution-based
featured: false
---

SWE-bench sits at the boundary between benchmark-based and agent
evaluation. The instrument scores a final outcome — do the tests pass —
which makes the signal auditable but leaves everything between prompt and
patch invisible: tool choices, unnecessary actions, cost, and unsafe
intermediate steps are not part of the score. The working reports treat it
as the leading coding-agent benchmark while documenting two standing
confounds, scaffold sensitivity and gameability, that any quoted score
should be checked against.

### What a score does and does not carry

A SWE-bench number is evidence about a scaffold-plus-model system, on a
specific variant of the item set, under a specific budget. Reports that
omit any of those three are not comparable. Because the underlying issues
and fixes are public GitHub history, contamination checks are part of
interpreting a score, not an optional extra.
