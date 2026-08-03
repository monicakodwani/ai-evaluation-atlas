---
id: reading-an-ai-evaluation-report
title: Reading an AI Evaluation Report
order: 3
summary: >-
  A working method for critiquing an evaluation paper, leaderboard claim, or
  system card — ten things to check, in order, ending with a printable
  checklist.
status: needs-verification
content_status: complete
key_terms:
  - construct
  - scoring
  - uncertainty
  - deployment relevance
related_entries:
  - benchmark-based-evaluation
  - human-evaluation
  - ai-as-a-judge
  - construct-validity
  - reliability
  - evaluation-reproducibility
  - ecological-validity
  - system-cards
source_notes: >-
  The critique sequence here operationalizes the measurement-science strand
  of the working research reports — construct validity, reliability, and
  uncertainty critiques of evaluation reporting — as a reading practice.
  It is the author's synthesis, offered as a method rather than a standard.
created: 2026-08-03
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
---

Evaluation reports are written to be believed. Papers foreground their
headline numbers; system cards foreground their diligence; leaderboards
foreground their rankings. None of this is dishonest — it is what reporting
genres do. But it means reading an evaluation well is an active skill: the
information you need is usually present somewhere, de-emphasized, or absent
in a way that is itself informative.

This guide is a working method: ten things to check, roughly in order.
It works on research papers, benchmark releases, model announcements, and
system cards alike. You will not always be able to answer every question —
and discovering *that you can't* is a finding.

## 1. Construct — what is supposedly being measured?

Find the property the report claims to measure: reasoning, safety, coding
ability, helpfulness. Then find where that property is defined. Usually you
will find a name, not a definition — the construct is whatever the dataset
happens to contain, and the name is doing the arguing. Ask: if this
instrument had a boring, literal name (say, "multiple-choice science
questions with four options"), would the conclusions still sound as
significant?

## 2. Task — what did the system actually do?

Read the task description as literally as you can: what inputs, what
allowed outputs, what format. Note the distance between the task and the
activity it stands in for. Answering exam questions stands in for knowing;
completing a pull request stands in for engineering; declining a scripted
request stands in for safety. The distance is not disqualifying — but it
bounds every conclusion.

## 3. Benchmark or dataset — where did the items come from?

Who wrote the items, when, and how were they selected? Is the set public,
and for how long has it been? Older public sets are more likely
contaminated — present in training data — and more likely saturated. Check
whether the report addresses contamination at all; silence on it, for a
public benchmark, is a real omission. For custom datasets, ask what was
excluded and whether the sampling resembles anyone's reality.

## 4. Evaluator — who or what did the judging?

Exact-match scripts, execution against tests, human raters, or an AI
judge? Each carries a different failure profile. For human raters: how
many, recruited how, with what expertise, and was their agreement
measured? For AI judges: which model, with what prompt, validated against
what human standard? A judge of the same model family as the system under
test deserves particular suspicion. If you cannot identify the evaluator
precisely, you cannot interpret the score.

## 5. Scoring — how did behavior become a number?

Find the scoring rule: what counts as correct, and what aggregation turned
item results into the headline number. Aggregates hide structure —
subgroup differences, item difficulty, partial credit. For pairwise
preference results, check for position and length controls. For pass/fail
agent tasks, check what the checker actually checks: end states can be
reached without the intended competence.

## 6. Uncertainty — how much could the number move?

Look for error bars, confidence intervals, or any statistical test. Most
reports have none. Then look for repetition: were results run once or
multiple times, with what variance? A single run of a stochastic system is
an anecdote with a decimal point. If two systems differ by a point or two
with no uncertainty reported, treat the ranking as undetermined.

## 7. Reliability — would it replicate?

Could you re-run this evaluation? That requires exact prompts, decoding
settings, model version, and scoring code. Check what is published. Also
ask about sensitivity: does the report show robustness to prompt
paraphrase, answer order, or few-shot selection — or was one configuration
chosen and reported? An unreported configuration is an uncontrolled
variable that was almost certainly explored during development.

## 8. Validity — does the evidence support the construct claim?

Now connect step 1 to steps 2–7. The report measured performance on a
specific task with a specific scorer. Does anything in the report connect
that measurement to the named construct — comparison against expert
judgment, convergence with other instruments, error analysis? Or does the
connection rest entirely on the benchmark's name? Most of the time it is
the name. That does not make the result worthless; it makes the result a
task score, not a construct measurement.

## 9. Deployment relevance — does this transfer to use?

Ask what the tested artifact was: a base model through an API, or the
actual deployed system with its prompts, retrieval, tools, and users?
Results measured on one do not automatically describe the other. Then ask
about conditions: single-turn, clean inputs, no adversary — or something
resembling the messy, interactive, adversarial setting the system will
face? A report can be internally rigorous and still say almost nothing
about deployment.

## 10. Limitations — what does the report say about itself?

Read the limitations section last, and read it twice. The first read tells
you what the authors flagged. The second read is for what is missing: the
limitation sections of strong reports name the specific claims their
evidence cannot support; weak ones list generic caveats. Also note any
results mentioned as excluded, failed, or "left to future work" — absence
patterns are data.

---

## The checklist

Print this. Use it on the next evaluation you read.

1. **Construct** — Is the measured property defined, or only named?
2. **Task** — What did the system literally do, and what does that stand in for?
3. **Dataset** — Who made it, is it public, could it be contaminated or saturated?
4. **Evaluator** — Who or what scored, with what known biases, validated how?
5. **Scoring** — What rule and aggregation produced the headline number?
6. **Uncertainty** — Are there intervals, repetitions, statistical tests?
7. **Reliability** — Are prompts, settings, versions, and code published? Sensitivity shown?
8. **Validity** — Is there any evidence linking the score to the construct?
9. **Deployment** — Was the deployed system tested, under realistic conditions?
10. **Limitations** — Are the unsupported claims named, or gestured at?

A report can fail several checks and still be useful — as evidence for a
narrower claim than its abstract makes. The skill this checklist teaches is
not rejection. It is *resizing*: finding the claim the evidence actually
supports, and noticing who is trying to spend it on a larger one.
