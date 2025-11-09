import { getCollection } from "astro:content";

export async function getSortedPersonas() {
  const personas = (await getCollection("personas")).map((persona) => ({
    ...persona,
    data: {
      rank: -1,
      ...persona.data,
    },
  }));
  console.debug("[personaEntry.ts]", { personas });
  personas.sort(({ data: lhs }, { data: rhs }) => lhs.rank - rhs.rank);
  return personas.toReversed();
}

export function personaDisplay(
  persona: Awaited<ReturnType<typeof getCollection<"personas">>>[0] | string,
): string {
  const transformFn = (p: string) => p.replaceAll("-", " ");
  if (persona != null && typeof persona === "object") {
    return transformFn(persona.data.persona);
  }
  return transformFn(persona);
}
