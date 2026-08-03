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
why_it_matters: >-
  SWE-bench resolved rates have become the headline number for coding
  agents, quoted in release announcements and product comparisons. Whether
  those comparisons mean anything depends on what the number actually
  carries — and on the confounds it inherits from scaffolds,
  contamination, and gameable checkers.
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
evidence_produced: >-
  Resolved rates: the share of a fixed set of real repository issues for
  which a scaffold-plus-model system produced a change that passed the
  repository's tests, under a stated variant, budget, and configuration.
combine_with:
  - >-
    Agent-trajectory evaluation, because the outcome score leaves tool
    choices, cost, and unsafe intermediate steps invisible.
  - >-
    Contamination checks whenever the variant's issues and fixes predate
    the model's training cutoff — they are public GitHub history.
  - >-
    Trials on your own repositories, languages, and review standards
    before treating a resolved rate as evidence for product selection.
misconceptions:
  - misconception: >-
      Solving SWE-bench issues means the system can do a software
      engineer's job.
    reality: >-
      The instrument scores one slice of the job — producing a patch that
      passes existing tests on curated public issues. Requirements work,
      design, review, debugging in unfamiliar code, and maintainability
      are all outside the score.
  - misconception: The resolved rate is a property of the model.
    reality: >-
      It is a property of the model plus its scaffold, retries, and
      budget. Analyses cited in the working reports find scaffolding
      choices can shift results by more than the gap between model
      generations.
  - misconception: If the tests pass, the task was genuinely solved.
    reality: >-
      Test suites are incomplete oracles, and the evaluation pipeline
      itself has reportedly been gamed — an agent can satisfy the outcome
      checker by editing test configuration rather than fixing the code.
questions_to_ask:
  - Which variant was run — original, Verified, Pro — and on the full
    item set or a subset?
  - What scaffold, retry policy, and budget produced this number, and are
    they reported precisely enough to reproduce?
  - Were the issues and their fixes public before the model's training
    cutoff, and did anyone check for contamination?
  - Was the harness audited for checker gaming, or were only the final
    pass/fail counts recorded?
  - How many runs per item, and what is the variance across runs?
  - Do the benchmark's repositories and languages resemble the codebases
    the claim is being applied to?
debates:
  - question: Is outcome-only scoring the right target for coding agents?
    positions:
      - label: Score the outcome
        view: >-
          Whether the tests pass is auditable, scalable, and free of
          judge subjectivity. Process metrics invite gaming of a
          different kind, and what ultimately matters to a user is
          whether the issue got fixed.
      - label: Score the trajectory too
        view: >-
          Outcome-only scoring cannot distinguish a clean fix from a
          lucky, wasteful, or unsafe one, and it is exactly what makes
          checker gaming profitable. Cost, actions taken, and code
          quality are part of what resolving an issue means in practice.
    note: >-
      The working reports treat outcome scores as the reporting
      convention while documenting gaming and scaffold sensitivity as
      standing reasons to inspect trajectories alongside them.
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
last_reviewed: 2026-08-03
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
