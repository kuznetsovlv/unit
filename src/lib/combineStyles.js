/**
 * Combines styles in arguments.
 * @returns {string} - tag of stiles for print-str combined from arguments.
 */
export default (...styles) => `@${styles.join(',')};`;