---
# Copy this file into src/content/methods/<id>.md
# The filename (without .md) MUST equal the id field.
# Allowed values for every enum field are defined in
# src/data/vocabularies.ts — the build fails on unknown values.
id: my-method-id
title: Method name
aliases: []
entry_type: method
# status: verified | partially-verified | needs-verification | draft
status: draft
# content_status: complete | substantive-draft | outline | stub
content_status: stub
summary: >-
  One or two sentences shown on cards and in search results.
definition: >-
  Plain-language definition rendered at the top of "What it is".
why_it_matters: >-
  Optional second paragraph for "What it is".
claimed_constructs: []      # e.g. [capability, safety] — see CONSTRUCTS
evaluation_levels: []       # e.g. [model, output] — see EVALUATION_LEVELS
lifecycle_stages: []        # e.g. [pre-deployment] — see LIFECYCLE_STAGES
purposes: []                # see PURPOSES
evaluator_types: []         # see EVALUATOR_TYPES
evaluator_filters: []       # coarse Explore filters — see EVALUATOR_FILTERS
environments: []            # see ENVIRONMENTS
scoring_mechanisms: []      # see SCORING_MECHANISMS
# evidence_class: formal-standard | industry-practice | research-convention |
#                 emerging | proposed
evidence_class: emerging
# maturity: established | common-contested | emerging | experimental | draft
maturity: draft
# human_involvement: none | in-the-loop | on-the-loop | human-led   (optional)
# access_model: fully-open | partially-open | api-only | confidential-external |
#               regulator-only | internal | third-party-controlled  (optional)
strengths: []
limitations: []
appropriate_claims: []      # claims results CAN support
inappropriate_claims: []    # claims results CANNOT support — rendered prominently
# evidence_produced: >-     # one or two sentences: the KIND of evidence produced
# combine_with: []          # when to pair with other methods (prose items)
# misconceptions:           # misconception/reality pairs (defining visual feature)
#   - misconception: One sentence stating the common misreading.
#     reality: >-
#       One or two sentences stating what is actually the case.
# questions_to_ask: []      # closing critical-thinking questions; omit to use
#                           # the per-type defaults in src/data/default-questions.ts
# debates:                  # genuine open disagreements, presented fairly
#   - question: The disputed question?
#     positions:
#       - label: Position A
#         view: >-
#           That position, summarized fairly.
#       - label: Position B
#         view: >-
#           The competing position, summarized fairly.
#     note: >-              # optional: where the evidence currently stands
# reliability_evidence: >-   (optional prose)
# validity_evidence: >-      (optional prose)
# reproducibility_notes: >-  (optional prose)
# adoption_evidence: >-      (optional prose)
known_failure_modes: []
related_entries: []         # ids of other entries, any collection
related_guides: []          # guide ids, e.g. [evaluation-is-measurement]
primary_sources: []         # ids of records in src/content/sources/
secondary_sources: []
source_status: >-
  One line on how well sourced this entry currently is.
created: 2026-07-31
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
tags: []
featured: false
---

Optional Markdown body, rendered inside the "What it is" section.
Use paragraphs and `###` subheadings only (the page supplies `##` sections).
