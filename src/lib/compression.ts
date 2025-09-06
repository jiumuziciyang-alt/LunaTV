// src/lib/compression.ts

// gzip 压缩
export async function gzipData(input: Uint8Array): Promise<Uint8Array> {
  const cs = new CompressionStream("gzip");
  const writer = cs.writable.getWriter();
  writer.write(input);
  writer.close();
  const compressed = await new Response(cs.readable).arrayBuffer();
  return new Uint8Array(compressed);
}

// gunzip 解压
export async function gunzipData(input: Uint8Array): Promise<Uint8Array> {
  const ds = new DecompressionStream("gzip");
  const writer = ds.writable.getWriter();
  writer.write(input);
  writer.close();
  const decompressed = await new Response(ds.readable).arrayBuffer();
  return new Uint8Array(decompressed);
}