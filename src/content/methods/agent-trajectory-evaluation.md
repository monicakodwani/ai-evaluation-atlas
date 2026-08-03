---
id: agent-trajectory-evaluation
title: Agent trajectory evaluation
aliases:
  - Trajectory scoring
  - Process evaluation of agents
entry_type: method
status: needs-verification
content_status: substantive-draft
summary: >-
  Scoring the full sequence of actions an agent takes — tool calls,
  intermediate states, permissions respected or violated — rather than only
  whether the final task outcome was achieved.
definition: >-
  Agent trajectory evaluation examines the process by which an agent reaches
  an outcome. Where outcome-only evaluation records a binary task success,
  trajectory evaluation records the action sequence itself — which tools
  were called with which arguments, what data was accessed, what state was
  changed, whether actions were authorized, necessary, and reversible, and
  how the agent responded to errors. The trajectory, not the endpoint, is
  the unit of analysis.
why_it_matters: >-
  Agents act in environments, and most of what can go wrong — unauthorized
  actions, data exposure, reckless shortcuts, wasted resources — is
  invisible to a pass/fail outcome score. Outcome-only scoring has also
  proven gameable, so trajectory evaluation is becoming the field's answer
  to a basic question outcome scores cannot settle - whether the agent
  actually solved the task, and solved it acceptably.
claimed_constructs:
  - capability
  - safety
  - security
  - reliability
evaluation_levels:
  - agent-trajectory
  - tool-call
  - task
  - application
lifecycle_stages:
  - pre-deployment
  - deployment
  - monitoring
purposes:
  - model-comparison
  - risk-discovery
  - safety-assurance
  - scientific-understanding
evaluator_types:
  - model-developer
  - application-developer
  - independent-researcher
  - ai-judge
evaluator_filters:
  - automated-verifier
  - ai-judge
  - mixed-human-ai
environments:
  - sandbox
  - simulation
  - public-benchmark
scoring_mechanisms:
  - execution-based
  - policy-rule-checking
  - ai-judge
evidence_class: emerging
maturity: experimental
strengths:
  - Detects gamed or lucky outcomes that outcome-only pipelines score as
    success.
  - Surfaces unauthorized, unnecessary, or unsafe intermediate actions that
    never appear in the final result.
  - Makes security properties — prompt-injection resistance, permission
    boundaries, data exposure — scorable at all, since these are properties
    of actions rather than outcomes.
  - Supports resource accounting (retries, tokens, tool calls, cost,
    latency) that outcome scores conceal.
  - Full trajectory logs make evaluations auditable after the fact.
limitations:
  - No standard trajectory schema or agreed metrics exist; scoring rubrics
    are bespoke per benchmark or per team.
  - Agent performance is highly stochastic across repeated runs, and most
    reported results come from single runs or unreported retry policies.
  - Scaffolding is a major confound; the working reports find scaffold
    choices can move scores by more than a model-generation gap, so scores
    attach to model-plus-scaffold, not the model.
  - Trajectory quality judgments often fall to AI judges, inheriting judge
    bias and prompt-injection vulnerability.
  - Benchmark environments are bounded and brittle; fixed tasks invite
    memorized, environment-specific strategies.
  - Logging complete trajectories with state snapshots is an engineering
    burden that few evaluation setups currently meet.
appropriate_claims:
  - The agent completed this task in this environment under this scaffold,
    retry policy, and budget, on the runs observed.
  - The inspected trajectories did (or did not) contain specified
    unauthorized, unnecessary, or unsafe actions in the tested environment.
  - The outcome score was (or was not) achieved through the intended
    solution path in the runs that were inspected.
  - Success rates varied across repeated runs by the reported amount under
    matched conditions.
inappropriate_claims:
  - That a high outcome score on an agent benchmark establishes the agent
    genuinely solved the tasks. Working reports describe an exploit-based
    agent achieving near-perfect scores through several leading benchmarks'
    official scoring pipelines without solving the tasks (needs
    verification); outcome numbers alone cannot exclude this.
  - That a single-run success rate predicts reliability. Reports describe
    large drops between single-run and repeated-run success (needs
    verification); one run estimates neither.
  - That a score attributes capability to the model rather than the
    model-plus-scaffold combination that produced it.
  - That passing an agent benchmark establishes safety against prompt
    injection, permission violations, or unsafe actions, unless those
    properties were explicitly tested — most current environments score
    outcomes only.
  - That sandboxed trajectory results transfer to deployment, where tools,
    permissions, adversaries, and environment state differ.
evidence_produced: >-
  Process records — full action sequences (tool calls and arguments, data
  accessed, state changed, permission events, error handling, retries,
  cost) showing how an outcome was reached, not just whether it was.
combine_with:
  - Outcome benchmarks — trajectory inspection tells you whether an
    outcome score can be trusted; the outcome score tells you which runs
    are worth inspecting.
  - Red teaming for adversarial trajectory properties — prompt-injection
    resistance and permission violations under attack, which cooperative
    task suites do not exercise.
  - Deployment monitoring, since sandboxed trajectories cannot show how
    the agent behaves against real tools, real users, and real
    adversaries.
misconceptions:
  - misconception: A passed task is a solved task.
    reality: >-
      A pass records the final state, not how it was reached. Agents have
      been scored as successful by exploiting the scoring pipeline itself
      — only the trajectory shows the difference.
  - misconception: A single-run success rate is a reliability estimate.
    reality: >-
      One run is one sample from a highly stochastic process, and
      reported gaps between single-run and repeated-run success are
      large. Without repeated runs, the number describes an event, not a
      performance.
  - misconception: An agent benchmark score measures the model.
    reality: >-
      It measures a model-scaffold-environment triple. Scaffold changes
      alone can move scores by more than a model-generation gap.
questions_to_ask:
  - How many runs is the reported success rate built on, and what was the
    dispersion across them?
  - What was the retry policy — and is the headline number pass-at-1 or
    pass-at-k with k unreported?
  - Were any trajectories actually inspected, or does the claim rest on
    final states alone?
  - What scaffold produced the score, and would the claim survive a
    scaffold change?
  - Were security properties — prompt injection, permission boundaries,
    unsafe side effects — scored, or only task completion?
  - Could the agent act on the evaluation apparatus itself, and would the
    scoring pipeline have detected it?
known_failure_modes:
  - Outcome gaming, where an agent exploits the evaluation pipeline itself
    (for example, editing test or configuration files) and is scored as
    successful.
  - Lucky passes, where a correct outcome follows an incorrect or unsafe
    process that a rerun would not reproduce.
  - Memorized environment-specific strategies substituting for general
    capability on fixed public tasks.
  - Unreported retries and pass-at-k selection inflating apparent
    reliability.
  - Silent scaffold changes between evaluations that shift scores while the
    model name stays constant.
reliability_evidence: >-
  A central known weakness rather than a settled property. The working
  reports cite independent analysis in which an agent's success fell from
  roughly 60 percent on a single run to roughly 25 percent across eight
  consecutive runs, and note that retries, cost, and environmental variation
  are rarely reported. Figures unverified against primary sources.
validity_evidence: >-
  The motivating validity argument is negative evidence about the
  alternative — outcome-only scores have been shown not to measure task
  competence when pipelines are exploitable. Whether specific trajectory
  metrics validly measure the processes they claim to (authorization
  compliance, safe recovery, necessity of actions) has not been established;
  the schemas themselves are still being designed.
reproducibility_notes: >-
  Requires more disclosure than outcome evaluation, not less - environment
  version and seeds, initial state, tool availability and failure behavior,
  scaffold and prompts, retry and budget policy, and full trajectory logs.
  Sandboxed harnesses that record complete transcripts (the working reports
  point to Inspect-style tooling) make this feasible; publication of such
  logs remains rare.
adoption_evidence: >-
  The working reports place trajectory-level agent evaluation in their
  emerging-to-experimental category — motivated by well-publicized failures
  of outcome-only scoring and supported by early security-focused
  environments for prompt injection and unsafe-action testing, but with no
  standard schema, metrics, or reporting norms yet. Most widely used agent
  benchmarks still score final outcomes only. (Needs source verification.)
related_entries:
  - swe-bench
  - osworld
  - inspect-ai
  - red-teaming
  - ai-as-a-judge
  - benchmark-based-evaluation
  - construct-validity
  - ecological-validity
  - evaluation-reproducibility
related_guides:
  - evaluating-agents-and-tool-use
  - from-model-scores-to-system-assurance
primary_sources: []
secondary_sources: []
source_status: >-
  Drafted from working research reports; no source records attached yet. The
  benchmark-gaming exploit, single-run versus repeated-run figures, and
  named security-evaluation environments are unverified against primary
  sources.
created: 2026-07-31
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
tags:
  - agents
  - trajectory
  - tool-use
  - process-evaluation
  - prompt-injection
featured: true
---

Agent evaluation began by importing the benchmark paradigm: define tasks,
run the agent, count completions. Trajectory evaluation is the correction
that followed, driven by a simple observation — when a system acts in an
environment, the final state underdetermines what happened. Two agents with
identical success rates can differ in everything that matters for
deployment: one solved the task, the other broke the scoring pipeline; one
respected its permissions, the other exfiltrated data along the way.

### Why outcome-only scoring fails

Outcome-only scores are gameable in a way single-response benchmarks are
not, because the agent can act on the evaluation apparatus itself. The
working reports describe a 2026 demonstration in which an agent built
exploits against the official scoring pipelines of leading agent benchmarks
and achieved perfect or near-perfect scores on most of them without solving
the underlying tasks — in one reported case by editing a few lines of a test
configuration file (figures and details need verification against the
primary source). Short of deliberate gaming, outcome scores also credit
lucky passes, where a fragile or unsafe process happened to end well. In
both cases the number is real and the measurement is not.

### What a trajectory score records

A trajectory evaluation layers additional records on top of the outcome:
which tools were called and with what arguments; what data was accessed and
what state was changed; whether each action was authorized, necessary, and
reversible; how the agent handled tool failures and whether it escalated to
a human when it should have; and what the run cost in retries, tokens, and
time. Authorization deserves emphasis as a distinct construct - an agent can
correctly infer the user's goal and still lack permission for the action
that achieves it, and a strong evaluation includes tasks where the useful
action conflicts with a permission boundary. These security-relevant
properties — prompt-injection resistance, permission compliance, avoidance
of unsafe side effects — are exactly the ones most current agent benchmarks
never score.

### Stochasticity and the scaffold problem

Two measurement facts complicate every agent result. First, repeated runs
of the same agent on the same tasks produce materially different outcomes;
the working reports cite success rates falling by more than half between a
single run and eight consecutive runs (needs verification). Any agent claim
without repeated runs and dispersion reporting is a claim about one sample.
Second, the scaffold — the orchestration code, prompting strategy, retry
logic, and tool wiring around the model — can move scores by more than the
gap between model generations. An agent score therefore characterizes a
model-scaffold-environment triple, and attributing it to the model alone is
an inference the evaluation does not support.
