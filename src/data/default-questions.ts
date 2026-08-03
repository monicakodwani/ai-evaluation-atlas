/**
 * Fallback "Questions to Ask" per entry type. Every entry page ends with a
 * Questions to Ask section; entries can override these with a tailored
 * `questions_to_ask` list in frontmatter, and the strongest entries should.
 */

import type { EntryTypeKey } from './vocabularies';

export const DEFAULT_QUESTIONS: Record<EntryTypeKey, string[]> = {
  method: [
    'What claim is this method being used to support, and can it carry that claim alone?',
    'Who or what does the scoring, and how would you know if the scorer were wrong?',
    'What are the main sources of variance, and were they measured?',
    'What would this method systematically miss, and what should be paired with it?',
  ],
  benchmark: [
    'What construct is being measured — and what evidence connects the items to that construct?',
    'How representative is the dataset of the situations you care about?',
    'Could contamination affect results?',
    'Does this benchmark resemble deployment conditions?',
    'Were prompts, settings, and model versions reported precisely enough to re-run it?',
  ],
  infrastructure: [
    'What does the harness standardize — and what does it leave to the user’s configuration?',
    'Are the exact task definitions, prompts, and scoring code versioned and inspectable?',
    'Would two teams using this tool on the same model get the same numbers?',
    'Does reproducible execution get mistaken for valid measurement?',
  ],
  standard: [
    'Does this standard specify measurable requirements, or processes and documentation?',
    'Who assesses conformity — the provider itself, or an independent party?',
    'What would an organization that meets this standard still not have demonstrated?',
    'How current is the standard relative to the systems being assessed?',
  ],
  institution: [
    'What access does this institution actually have — weights, systems, or public APIs?',
    'Can it compel testing or block deployment, or does participation depend on goodwill?',
    'Are its methods and findings published in enough detail to scrutinize?',
    'Who funds and oversees it, and how could that shape its conclusions?',
  ],
  observatory: [
    'Is this aggregation of reports, or direct testing of systems?',
    'What is the denominator — can counts be converted into rates?',
    'What reporting biases shape what appears here?',
    'What would be invisible to this observatory even if it were common?',
  ],
  documentation: [
    'What did the developer choose to disclose — and what is conspicuously absent?',
    'Can any claim in this document be independently reproduced from what is published?',
    'Has the document been updated since release, and is its version history visible?',
    'Who is the intended audience, and what incentives shaped the text?',
  ],
  concept: [
    'How would this concept change how you read the last evaluation result you saw?',
    'What common claim silently assumes this problem away?',
    'How would you detect this issue in practice, and what would it cost to check?',
    'What decisions become unsafe when this concept is ignored?',
  ],
};
