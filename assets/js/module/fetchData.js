export default async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Não foi possível obter os dados");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Erro na requisição: ${error.message}`);
  }
}
