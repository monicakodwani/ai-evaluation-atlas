---
id: ecological-validity
title: Ecological validity
entry_type: concept
status: needs-verification
content_status: outline
summary: >-
  The degree to which evaluation conditions resemble the conditions of
  actual use — the dimension on which most AI evaluation is weakest.
definition: >-
  An evaluation has ecological validity when its tasks, inputs, users, and
  context resemble deployment. A benchmark of exam-style questions has low
  ecological validity for a customer-support product; a field study in the
  real workflow has high ecological validity but less control. The working
  reports find that only a small share of generative-AI evaluations
  consider human-AI interaction at all, and fewer consider broader context
  (figures need verification).
why_it_matters: >-
  The benchmark-to-deployment gap is where most overstated claims live:
  systems that excel under test conditions can degrade sharply amid real
  users, real stakes, ambiguous inputs, and adversarial pressure. Claims
  about deployed behavior need ecologically valid evidence, not more
  benchmark precision.
claimed_constructs:
  - reliability
evaluation_levels:
  - workflow
  - interaction
  - application
lifecycle_stages:
  - deployment
  - design
purposes:
  - scientific-understanding
evidence_class: research-convention
maturity: emerging
appropriate_claims:
  - A mismatch between test conditions and deployment conditions bounds
    what a result can say about deployment.
  - Field studies, staged rollouts, and workflow evaluations provide
    evidence benchmarks cannot.
inappropriate_claims:
  - That high performance under controlled test conditions predicts
    deployed performance without evidence bridging the two.
  - That adding harder benchmark items raises ecological validity — item
    difficulty and deployment realism are different dimensions.
misconceptions:
  - misconception: Harder test items make an evaluation more realistic.
    reality: >-
      Difficulty and realism are orthogonal. An olympiad problem is very
      hard and nothing like deployment; a mundane, ambiguous user request
      may be easy to state and exactly what the system will face.
  - misconception: >-
      Ecological validity requires testing in production, so controlled
      evaluation is pointless.
    reality: >-
      It is a matter of degree, not a binary. Realistic task sampling,
      workflow studies, and staged rollouts each raise it — the question
      is whether test conditions resemble the conditions your claim is
      about.
questions_to_ask:
  - What would deployment actually look like for this claim — users,
    inputs, stakes, interfaces — and how much of that did the evaluation
    contain?
  - Were test inputs drawn from real usage, or authored by researchers who
    already knew what the system handles well?
  - If the product involves humans in the loop, did the evaluation include
    any human interaction at all?
  - What evidence bridges the gap between these test conditions and the
    deployment claim being made?
  - Would the result survive the ambiguous, adversarial, and out-of-scope
    inputs real users produce?
known_failure_modes:
  - Evaluating the model alone when deployment behavior is dominated by
    prompts, retrieval, interfaces, and users.
related_entries:
  - construct-validity
  - agent-trajectory-evaluation
  - human-evaluation
  - continuous-evaluation
related_guides:
  - what-counts-as-ai-evaluation
  - evaluation-after-deployment
source_status: >-
  Drafted from working research reports; the interaction-coverage figures
  cited there need verification.
created: 2026-07-31
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
tags:
  - validity
  - deployment
featured: false
---
