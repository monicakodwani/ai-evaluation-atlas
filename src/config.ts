/**
 * Central Atlas configuration. The version number is displayed in the footer,
 * About, Changelog, and Methodology pages — change it here only.
 */
export const ATLAS_VERSION = '0.3';

export const ATLAS_NAME = 'AI Evaluation Atlas';

export const ATLAS_SUBTITLE =
  'A public map of how AI systems are tested, judged, audited, and monitored.';

export const ATLAS_DESCRIPTION =
  'A public map of AI evaluation methods, benchmarks, standards, infrastructures, and evidence.';

export const ATLAS_LONG_DESCRIPTION =
  'Browse evaluation methods, benchmarks, standards, infrastructures, and institutions. ' +
  'Each entry separates what an evaluation measures from what its results can actually support.';

export const AUTHOR_NAME = 'Monica Kodwani';
export const AUTHOR_SITE = 'https://monicakodwani.github.io/';

export const REPO_URL = 'https://github.com/monicakodwani/ai-evaluation-atlas';
export const ISSUES_URL = `${REPO_URL}/issues`;

/** Site-wide <title> suffix. */
export const TITLE_SUFFIX = 'AI Evaluation Atlas | Monica Kodwani';

/**
 * Review gate. When enabled, every page shows a password screen once per
 * browser (remembered in localStorage) and all pages carry a noindex robots
 * tag. This is a courtesy curtain, NOT security: the full content is still
 * delivered to every visitor's browser and is readable in the public repo.
 * To change the password, replace the hash with the output of:
 *   node -e "console.log(require('crypto').createHash('sha256').update('YOUR-PASSWORD').digest('hex'))"
 * To open the site to everyone again, set GATE_ENABLED to false.
 */
export const GATE_ENABLED = true;
export const GATE_PASSWORD_SHA256 =
  '7c82602500857aa6ed0cf38c4c3e4ec645bdcaa82c00b9155eb08be100c778a9'; // "atlas"

/** One-line editorial identity, shown in the footer. */
export const ATLAS_TAGLINE = 'A living reference for understanding AI evaluation.';

/** Three-word philosophy shown beneath the tagline. */
export const ATLAS_ETHOS = 'Independent · Evidence-informed · Open to revision';
