/**
 * Creates style combiner.
 */
export default (...initials) => (...styles) =>`@${initials.concat(styles).join(',')};`;