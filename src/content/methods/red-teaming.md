---
id: red-teaming
title: Red teaming
aliases:
  - Adversarial testing
  - Misuse testing
entry_type: method
status: needs-verification
content_status: substantive-draft
summary: >-
  Deliberate adversarial search for failures — attempts to elicit harmful,
  unsafe, or policy-violating behavior from a system. Strong at proving a
  failure exists; weak at estimating how often it would occur in the world.
definition: >-
  Red teaming is adversarial evaluation. Instead of measuring performance on
  a fixed task set, a red team — human, automated, or both — actively tries
  to make the system fail, by finding jailbreaks, eliciting dangerous
  capabilities, bypassing guardrails, or discovering misuse pathways. The
  output is a set of demonstrated failures under specified conditions, not
  a score on a sampled population of inputs.
why_it_matters: >-
  Red teaming is the main way the field discovers failures that no benchmark
  anticipated, and it now sits at the center of frontier-lab release
  processes and government evaluation programs. It is also the site of the
  field's most consequential inferential leap, because a red-team result is
  an existence proof that is routinely read as a risk estimate.
claimed_constructs:
  - safety
  - security
  - misuse
  - harmful-content
  - robustness
evaluation_levels:
  - model
  - output
  - interaction
  - application
lifecycle_stages:
  - pre-deployment
  - release
  - deployment
purposes:
  - risk-discovery
  - safety-assurance
  - mitigation-testing
  - release-decision
evaluator_types:
  - model-developer
  - external-evaluator
  - domain-expert
  - independent-researcher
evaluator_filters:
  - human
  - expert
  - mixed-human-ai
environments:
  - laboratory
  - sandbox
  - public-benchmark
scoring_mechanisms:
  - expert-adjudication
  - ai-judge
  - policy-rule-checking
evidence_class: industry-practice
maturity: emerging
human_involvement: human-led
strengths:
  - Discovers failure modes that fixed benchmarks and developer test suites
    did not anticipate.
  - Adapts to new systems and new attack surfaces faster than standardized
    instruments can be built.
  - Expert variants can probe specialized high-hazard domains (biological,
    cyber, chemical) that generic evaluations cannot assess credibly.
  - Community challenges and bug bounties diversify the attacker population
    beyond the developer's own imagination.
  - Standardized attack suites and shared severity taxonomies improve
    comparability across systems, within their fixed coverage.
limitations:
  - A finding is an existence proof under the tested conditions; it carries
    no information about base rates, adversary prevalence, or expected harm.
  - No finite attack suite establishes absence of vulnerabilities; a clean
    run bounds nothing.
  - Results depend heavily on attacker skill, access, budget, and number of
    attempts — quantities that reports often omit.
  - Static attack suites decay; guardrails tuned to known attacks have
    repeatedly failed under adaptive attacks that adjust to the defense.
  - Automated attack-success scoring typically relies on AI judges, which
    adversarial outputs can themselves mislead.
  - Reporting practice is weak at both extremes — anecdotal alarming
    transcripts, or attack-success percentages that imply false precision
    without a specified attack distribution.
appropriate_claims:
  - Attack technique X elicited behavior Y from this system, under this
    configuration, access level, and attempt budget, at this time.
  - The system is vulnerable to at least the demonstrated failure classes.
  - Mitigation M blocked the specific attack set tested, in this exercise.
  - The red team found (or did not find) evidence of a specified dangerous
    capability under the elicitation methods used.
inappropriate_claims:
  - That passing a red-team exercise establishes the system is safe. Red
    teaming can only demonstrate failures, never their absence.
  - That a clean result is a risk estimate. Converting findings into
    estimates of real-world risk requires base rates, adversary models,
    exploitability, and residual-risk analysis that red-team exercises do
    not produce.
  - That guardrails which pass a static red-team suite will hold against
    adaptive adversaries who learn the defense.
  - That an attack-success percentage measures real-world misuse likelihood
    rather than performance against one attack distribution and one judge.
  - That failure to elicit a dangerous capability shows the model provides
    no uplift — unevaluated pathways remain untested by definition.
reliability_evidence: >-
  Rarely quantified. Attack-success rates vary with attempt budget, attacker
  skill, elicitation method, and judge choice, and exercises are seldom
  repeated under matched conditions. The working reports treat run-to-run
  and team-to-team variability as essentially unmeasured. (Needs source
  verification.)
validity_evidence: >-
  Strong for existence claims — a validated transcript demonstrates the
  failure occurred. Weak for the claims red-team results are most often used
  to support: prevalence, deployment risk, and safety. The working reports
  describe the conversion of red-team findings into risk estimates as an
  unsolved problem, and note that uplift studies (controlled comparisons of
  task performance with and without model assistance) are an emerging
  attempt to measure marginal risk rather than raw capability.
reproducibility_notes: >-
  Reproducibility requires disclosure that is uncommon in practice — target
  configuration, attacker access and budget, attempt counts, adaptation
  protocol, judge method, and validation of claimed successes. Manual
  exercises are inherently hard to replicate; standardized attack suites are
  replicable but cover only their fixed attack distribution.
adoption_evidence: >-
  The working reports describe internal and external red teaming as standard
  practice among frontier developers and as a core activity of government AI
  evaluation institutes, typically tied to dangerous-capability thresholds
  in responsible-scaling and frontier-safety policies. Adoption is wide;
  methodological standardization is not — which is why this entry records
  the evidence class as industry practice and the maturity as emerging.
  (Adoption specifics need source verification.)
known_failure_modes:
  - Static-suite overfitting, where defenses are tuned to the known attack
    set and fail against novel or adaptive attacks.
  - Judge manipulation, where adversarial outputs mislead the automated
    safety judge scoring the exercise.
  - Anecdotal reporting, where the most alarming transcript stands in for a
    characterization of the failure surface.
  - Attack-generation models optimizing against a narrow judge rather than
    finding transferable failures.
  - Reading a bottleneck-task failure as evidence of no uplift while other
    pathways go unevaluated.
related_entries:
  - harmbench
  - wmdp
  - ai-as-a-judge
  - agent-trajectory-evaluation
  - benchmark-based-evaluation
  - standards-and-assurance
  - uk-ai-security-institute
  - inspect-ai
  - assurance-case
related_guides:
  - red-teaming-versus-risk-estimation
  - from-model-scores-to-system-assurance
primary_sources: []
secondary_sources: []
source_status: >-
  Drafted from working research reports; no source records attached yet.
  Adoption claims, named safety-policy examples, and uplift-study findings
  are unverified against primary sources.
created: 2026-07-31
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
tags:
  - red-teaming
  - adversarial
  - safety
  - dangerous-capabilities
  - jailbreak
featured: true
---

Red teaming occupies an unusual position in the evaluation landscape: it is
among the most widely adopted practices at the frontier and among the least
methodologically settled. The working reports describe it as standard
practice for frontier developers and government institutes, yet there is no
shared protocol for what counts as an adequate exercise, how findings should
be reported, or — most importantly — what a red-team result licenses anyone
to conclude.

### How it works

Red teaming spans several variants that differ in who attacks and how.
Manual red teams use human creativity and domain knowledge. Automated red
teams use attack-generation models or standardized attack suites to search
at scale. Expert red teams focus on specialized hazard domains — biological,
chemical, cyber — where credible probing requires subject-matter knowledge.
Community challenges and bug bounties open the attacker pool to outsiders.
A related genre, the uplift study, asks a different question: not whether
the model can be made to misbehave, but whether access to it measurably
increases what a user could accomplish relative to existing tools. One
controlled study of biological-attack planning reported no statistically
significant uplift from then-current models, while cautioning that a
negative result today does not guarantee future safety. (Needs source
verification.)

### The unsolved step: from findings to risk

A red-team finding proves existence: this failure can be produced under
these conditions. The claims that matter for release decisions are about
risk: how likely is this failure in deployment, against real adversaries,
after mitigations. Bridging that gap requires base rates, adversary
prevalence and adaptiveness, exploitability, transfer across system
variants, and residual risk after mitigation — none of which a red-team
exercise measures. The working reports treat this conversion as unsolved,
and it cuts in both directions. An alarming transcript does not establish
high risk without evidence about frequency and exploitability, and a clean
exercise does not establish low risk, because the attack space searched is
a vanishing fraction of the attack space that exists.

### Static suites and adaptive adversaries

Standardized attack suites make red-team results comparable and repeatable,
but they freeze the attack distribution. The jailbreak literature summarized
in the working reports repeatedly finds that guardrails passing static
suites fail under adaptive attacks — adversaries who observe the defense and
adjust. A defensible safety argument therefore needs adaptive testing, not
just a fixed suite, and needs the automated judge that scores attack success
treated as part of the attack surface, since adversarial outputs can be
crafted to fool the judge as well as the target.
