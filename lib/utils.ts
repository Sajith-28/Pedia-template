/** Tiny class-name joiner — keeps JSX readable without pulling in a dependency. */
export function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}
