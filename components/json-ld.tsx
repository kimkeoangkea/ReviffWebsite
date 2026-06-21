type Schema = Record<string, unknown>;

/**
 * Renders one or more schema.org objects as a JSON-LD script tag.
 * Server component — safe to place anywhere in the rendered tree.
 */
export function JsonLd({ data }: { data: Schema | Schema[] }) {
  const payload = Array.isArray(data) ? data : [data];

  return (
    <>
      {payload.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
