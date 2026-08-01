---
id: evaluating-agents-and-tool-use
title: Evaluating Agents and Tool Use
order: 8
summary: >-
  Agents act over many steps, call tools, and hold permissions — and
  inherited single-turn evaluation habits break on every one of those
  properties.
status: draft
content_status: outline
key_terms:
  - agent trajectory
  - tool call
  - scaffolding
  - prompt injection
related_entries:
  - agent-trajectory-evaluation
  - osworld
  - swe-bench
  - inspect-ai
  - ecological-validity
created: 2026-07-31
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
---

*This guide is a structured outline. Each section states what it will argue
and the evidence it needs; full prose is in progress.*

## Why agent evaluation is different

An agent's unit of behavior is not a response but a trajectory: a sequence
of observations, decisions, tool calls, and side effects. This section
will argue that this changes the object of evaluation, the failure modes,
and the meaning of "success" — a correct final state reached through
unauthorized or destructive steps is not a success.

## Outcome versus trajectory scoring

Most agent benchmarks score final outcomes only, and outcome checkers can
be gamed — the working reports describe exploits achieving near-perfect
scores on leading benchmarks without solving tasks. This section will
cover trajectory and process scoring as the response, and what "partial
credit" should mean. Needed: verified accounts of the gaming
demonstrations.

## Stochasticity and scaffolding

Agent results vary sharply across runs, and scaffolding choices can move
scores by more than a model upgrade. This section will argue that
single-run success rates are close to meaningless for stochastic agents,
and that the scaffold is part of the system under test and must be
reported as such.

## Security properties

Prompt injection, data exfiltration, unnecessary or unsafe actions,
permission-boundary violations: the failure modes that matter most in
deployment are the least covered by capability benchmarks. This section
will survey the emerging security-evaluation environments and the
model-layer versus runtime-layer distinction. Needed: sourced accounts of
injection-evaluation work.

## Environments and their limits

Sandboxes and simulated environments made agent evaluation tractable and
remain bounded, brittle, and memorizable. The closing section will argue
for reading environment scores the way the Atlas reads all scores:
evidence about performance in that environment, with transfer to real
deployments a separate claim needing separate evidence.
