export async function pedirMetas() {
  const response = await fetch("/api/metas");
  const metas = await response.json();
  return metas;
}
export async function pedirMeta(id) {
  // const response = await fetch(`/meta.json/${id}`);
  const response = await fetch(`/api/metas/${id}`);
  const meta = await response.json();
  return meta;
}

export async function crearMeta(meta) {
  // const response = await fetch("/meta.json", {
    const response = await fetch("/api/metas", {
    method: "POST",
    body: JSON.stringify(meta),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
  const metaCreada = await response.json();
  console.log("Meta creada!", metaCreada);
  return metaCreada;
}

export async function actualizarMeta(meta) {
  // const response = await fetch("");
  const response = await fetch(`/api/metas/${meta.id}`, {
    method: "PUT",
    body: JSON.stringify(meta),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
  const metaActualizada = await response.json();
  console.log("Meta actualizada!", metaActualizada);
  return metaActualizada;
}

export async function borrarMeta(id) {
  // const response = await fetch("/meta.json");
  // const metaBorrada = await response.json();
  await fetch(`/api/metas/${id}`, {
    method: "DELETE"
  });
  console.log("Meta borrada!", id);
  // return metaBorrada.id;
}
