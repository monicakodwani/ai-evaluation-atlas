---
id: what-counts-as-ai-evaluation
title: What Counts as AI Evaluation?
order: 1
summary: >-
  AI evaluation is no longer adequately described as running a model on a
  benchmark and reporting accuracy. This guide maps what the term now
  covers — and why the right method depends on the claim being made.
status: needs-verification
content_status: complete
key_terms:
  - evaluation
  - model vs. system
  - evaluation purpose
  - sociotechnical evaluation
related_entries:
  - benchmark-based-evaluation
  - human-evaluation
  - ai-as-a-judge
  - red-teaming
  - agent-trajectory-evaluation
  - standards-and-assurance
source_notes: >-
  This guide synthesizes two working research reports on the trustworthy-AI
  evaluation landscape (current through mid-2026), which themselves draw on
  the measurement-validity literature, standards documents, and benchmark
  scholarship. Claims here are stated at a level the reports support;
  specific figures and named findings are deliberately avoided pending
  source verification. See the Methodology page for how sources are handled.
created: 2026-07-31
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
---

For most of machine learning's history, "evaluation" had a settled meaning:
hold out a test set, run the model, report a number. The number was usually
accuracy, and the ritual was so standard that the word *evaluation* barely
needed defining. That definition no longer describes what the field does —
or what it needs.

Today, the work that goes under the name of AI evaluation includes
scientific measurement of model behavior; software-style testing with pass
and fail conditions; human evaluation panels rating outputs; safety and
security testing; red teaming that tries to make systems fail; agent
evaluations that watch a system act over many steps; organizational
assurance processes; independent audits; regulatory assessment;
post-deployment monitoring; and the forensic analysis of incidents after
something has gone wrong. These activities have different logics, different
evaluators, different failure modes, and different standards of evidence.
Calling them all "evaluation" is fine. Treating them as interchangeable is
not.

The premise of this guide — and of the Atlas — is that evaluation is the
production of *evidence*, and evidence is always evidence *for a specific
claim*. Once you ask "what claim is this result supposed to support?", the
apparent chaos of methods organizes itself.

## Models are not systems

The single most consequential distinction in modern AI evaluation is
between a **model** and a **system**.

A model is a trained artifact: weights plus an inference configuration,
typically probed through prompts and sampled outputs. A system is what
actually meets the world: the model *plus* its system prompts, retrieval
pipelines, tools it can call, memory, user interface, permission
boundaries, guardrail classifiers, and the human workflow wrapped around
all of it.

Nearly every published benchmark number is a model-level measurement. But
nearly every claim people care about — is this safe to give to customers,
will it mislead patients, can it be trusted with this database — is a
system-level claim. The gap between the two is not a technicality. Each
layer of scaffolding can change behavior substantially: a retrieval
pipeline changes what the model asserts; a tool changes what it can do; an
interface changes what users believe; a permission model changes what a
failure costs. Recent syntheses report that differences in agent
scaffolding alone can move task performance by margins comparable to a
model-generation upgrade.

The practical rule: base-model scores do not transfer to applications by
default. Whoever wants to use a model-level result to support a
system-level claim owes an argument — ideally evidence — for why the
result survives the journey.

## The objects of evaluation

"What is being evaluated?" has more answers than model-or-system. The
Atlas organizes them as a stack of levels, from data up to societal
impact, and the essay-level version goes like this.

You can evaluate the **data** a system was built and tested on — its
provenance, representativeness, and whether the test items leaked into
training. You can evaluate the **model**, and most published numbers stop
here. You can evaluate a single **output**, or a whole **interaction**,
where errors compound and single-turn safety results routinely fail to
predict multi-turn behavior. You can evaluate **task** completion against a
success criterion, or an agent's whole **trajectory** — not just whether it
reached the goal but how: which tools it called, what it was authorized to
do, whether it succeeded for the right reasons.

Above that, you can evaluate the assembled **application**, the human-plus-AI
**workflow** it sits inside — where the interesting questions are about
oversight, reliance, and error recovery — the **organization** that builds
and operates it, and finally the **societal impact** of the technology at
population scale, where incident databases and observatories operate.

Each level has its own methods and its own characteristic mistake. The
mistake is almost always the same shape: taking evidence produced at one
level and quietly spending it at another.

## The purposes of evaluation

Methods also sort by *why* the evidence is being produced.

**Comparison** — which model is better on this instrument — is what
benchmarks and leaderboards do well, and it is a legitimate purpose so long
as the comparison stays attached to the instrument. **Scientific
understanding** asks what systems can do and why, and tolerates artificial
conditions in exchange for control. **Risk discovery** — red teaming,
dangerous-capability probes — is open-ended search for failure, and its
logic is existence proof, not rate estimation. **Release decisions** need
something different again: evidence assembled against pre-stated criteria,
because the question is not "what is interesting?" but "is this justified?"

Then there are the institutional purposes. **Assurance** accumulates
documented evidence that a system meets requirements. **Compliance**
demonstrates conformity with a standard or regulation — which, for most
current AI frameworks, means demonstrating that processes exist rather than
that measured thresholds were met. **Procurement** needs evidence that
survives vendor incentives. **Public accountability** needs evidence that
can be published and contested. And **monitoring** asks the question every
other purpose forgets: is any of this still true now that the system, its
users, and the world have changed?

The purpose determines the method, not the other way around. A benchmark
excellent for comparison is not thereby adequate for a release decision. A
red-team exercise that discovers a real risk does not thereby estimate how
often it occurs. An audit that verifies process says little about
performance. When an evaluation result feels overclaimed, the mismatch is
usually here: evidence produced for one purpose, spent on another.

## What this means in practice

If someone shows you an evaluation result, the productive questions are
almost never "is the number high?" They are: What object was evaluated —
model or system, output or trajectory? Under what conditions, and how far
are those from deployment? For what purpose was the evidence produced? And
what claim is it now being asked to carry?

The Atlas exists to make those questions easy to ask. Each entry states
what a method or instrument measures, what its results can support, and —
just as prominently — what they cannot.

The conclusion worth carrying out of this guide is simple to state and
demanding in practice: **the right evaluation method depends on the claim
being made and the decision the evidence must support. No single benchmark,
AI judge, human rating study, audit, or standard can establish
trustworthiness on its own.** Trustworthiness, if the word is to mean
anything, is a property argued from a body of evidence spanning levels,
purposes, and time — never read off a single score.
