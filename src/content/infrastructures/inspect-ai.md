---
id: inspect-ai
title: Inspect AI
aliases:
  - Inspect
entry_type: infrastructure
status: needs-verification
content_status: stub
summary: >-
  An open-source evaluation framework released by the UK AI Security
  Institute, structuring evaluations as dataset, task, solver, and scorer
  components, with sandboxed execution for agent evaluations.
definition: >-
  Inspect AI is an evaluation harness — software for defining, executing,
  and logging evaluations in a standardized way. Working research reports
  describe its core structure as a pipeline from dataset to task to solver
  to scorer, decoupling evaluation logic from any particular model API,
  with sandboxed environments for running agent tasks.
why_it_matters: >-
  A shared harness makes evaluation runs specifiable and auditable across
  models and organizations, which matters because unrecorded prompts,
  settings, and scoring code are a leading cause of irreproducible results.
  A harness standardizes execution, not measurement — it does not make the
  underlying instruments valid.
claimed_constructs:
  - capability
  - safety
evaluation_levels:
  - model
  - task
  - agent-trajectory
  - tool-call
lifecycle_stages:
  - pre-deployment
purposes:
  - model-comparison
  - risk-discovery
  - safety-assurance
evaluator_types:
  - external-evaluator
  - model-developer
  - independent-researcher
evaluator_filters:
  - automated-verifier
environments:
  - sandbox
  - public-benchmark
scoring_mechanisms:
  - exact-match
  - execution-based
evidence_class: research-convention
maturity: emerging
human_involvement: none
access_model: fully-open
strengths:
  - Standardized task definitions make evaluation runs specifiable and
    repeatable in principle across models and providers.
  - Sandboxed execution supports agent and tool-use evaluations that
    require an environment, not just a prompt.
  - Open-source release allows independent inspection of evaluation logic.
limitations:
  - Reproducibility still depends on exact task revisions, prompt
    templates, tokenizer behavior, model endpoints, decoding settings,
    sandbox images, and dependency versions — the harness fixes none of
    these by itself.
  - Standardized execution does not address contamination, saturation, or
    construct validity in the benchmarks it runs.
  - No harness is mandated by any standard or regulation; adoption is a
    research-community convention.
appropriate_claims:
  - This evaluation was executed under a recorded, inspectable
    configuration that others can rerun in principle.
  - Results from the same task version, prompts, model version, and
    settings are comparable across runs.
inappropriate_claims:
  - That running an evaluation in Inspect makes its results valid — the
    harness standardizes execution, not the construct or item quality.
  - That harness adoption by government institutes or frontier developers
    is evidence that any particular model is safe.
  - That two Inspect-produced scores are comparable without matching task
    revision, prompt template, model version, and sandbox configuration.
adoption_evidence: >-
  Working research reports describe Inspect as released by the UK AI
  Security Institute and adopted by several frontier developers, alongside
  companion releases described as a community benchmark repository and an
  evaluation engineering playbook. These adoption claims come from working
  research material and have not been independently verified.
related_entries:
  - uk-ai-security-institute
  - lm-evaluation-harness
  - helm-infrastructure
  - benchmark-based-evaluation
  - agent-trajectory-evaluation
  - evaluation-reproducibility
related_guides:
  - benchmarks-and-their-limits
  - evaluating-agents-and-tool-use
primary_sources:
  - src-uk-aisi-inspect
secondary_sources: []
source_status: >-
  Stub drafted from working research reports; the framework repository and
  official documentation have not yet been checked directly, and adoption
  claims are unverified.
created: 2026-07-31
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
tags:
  - harness
  - reproducibility
  - agents
featured: false
---
