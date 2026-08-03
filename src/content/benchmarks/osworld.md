---
id: osworld
title: OSWorld
entry_type: benchmark
status: needs-verification
content_status: outline
summary: >-
  An agent benchmark that evaluates computer-use agents on tasks in real
  operating-system applications rather than simplified simulated
  environments.
definition: >-
  OSWorld places an agent in a real computer environment — actual
  applications, files, and interfaces — and scores whether it completes
  defined tasks. Compared with single-turn question answering, it raises
  ecological realism for computer-use agents, while remaining a bounded,
  fixed-task environment.
claimed_constructs:
  - capability
evaluation_levels:
  - agent-trajectory
  - task
  - tool-call
lifecycle_stages:
  - pre-deployment
purposes:
  - model-comparison
  - scientific-understanding
evaluator_types:
  - model-developer
  - independent-researcher
evaluator_filters:
  - automated-verifier
environments:
  - public-benchmark
  - sandbox
scoring_mechanisms:
  - execution-based
evidence_class: emerging
maturity: emerging
access_model: fully-open
strengths:
  - Real applications and operating-system state make results more
    deployment-relevant than toy environments.
  - Task success is checked against the environment's actual end state
    rather than judged text.
  - The working reports describe it as unusually resistant to a
    benchmark-gaming exploit that defeated most leading agent benchmarks
    (needs verification).
limitations:
  - Fixed task sets remain vulnerable to memorization and
    environment-specific strategies as the benchmark ages.
  - Outcome-oriented scoring does not itself assess whether the agent's
    trajectory was safe, authorized, or efficient.
  - Agent results are highly sensitive to scaffolding, retries, and
    environment state, which published numbers often under-report.
appropriate_claims:
  - Agent system A completes more of these computer-use tasks than agent
    system B, under the stated scaffold, budget, and number of runs.
  - A given model-plus-scaffold configuration succeeds at a stated rate on
    this task distribution, with variance across runs reported.
inappropriate_claims:
  - That an OSWorld score establishes an agent is safe to operate on a real
    user's computer — safety properties such as permission respect and
    injection resistance are not what the tasks score.
  - That results transfer to workflows, applications, or task types outside
    the benchmark's environment coverage.
  - That a single-run success rate characterizes a stochastic agent's
    dependable performance.
why_it_matters: >-
  Computer-use agents are moving into real workflows, and the gap between environment success rates and safe deployed behavior is exactly where overclaiming happens.
evidence_produced: >-
  End-state task success rates for computer-use agents in real
  applications, under a specified scaffold, budget, and number of runs —
  capability evidence within the environment's task distribution.
combine_with:
  - Trajectory and process review, since end states can be reached through
    unsafe or unauthorized steps the checker does not score.
  - Prompt-injection and permission-boundary testing before any claim
    about safe operation on a user's machine.
  - Repeated runs with variance reported, given agent stochasticity.
misconceptions:
  - misconception: OSWorld success means the agent can safely use a computer.
    reality: >-
      It means the agent reached scored end states on bounded tasks.
      Safety properties — respecting permissions, resisting injected
      instructions, avoiding destructive shortcuts — are not what the task
      checkers measure.
  - misconception: A single success rate characterizes the agent.
    reality: >-
      The number belongs to a model-plus-scaffold-plus-budget
      configuration, and run-to-run variance is large; a different
      scaffold or a second run can move it substantially.
questions_to_ask:
  - How many runs produced this number, and what was the variance?
  - What scaffold, tools, and budget — and are they reported as part of
    the result?
  - Which task families drive the success rate?
  - Were any safety or authorization behaviors observed during the runs,
    and did anyone look?
  - How would performance change on applications and tasks outside the
    environment's coverage?
known_failure_modes:
  - Agents finding environment-specific shortcuts that satisfy checkers
    without the intended competence.
related_entries:
  - agent-trajectory-evaluation
  - swe-bench
  - benchmark-based-evaluation
  - ecological-validity
related_guides:
  - evaluating-agents-and-tool-use
primary_sources:
  - src-xie-2024-osworld
source_status: >-
  Drafted from working research reports, which cite Xie et al., 2024, as
  the OSWorld paper. Details not yet independently verified.
created: 2026-07-31
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
tags:
  - agents
  - computer-use
featured: false
---
