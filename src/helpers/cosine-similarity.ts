export const cosineSimilarity = (a: number[], b: number[]) => {
  const dotProduct = a.reduce((acc, curr, i) => acc + curr * b[i], 0);
  const aMagnitude = Math.sqrt(a.reduce((acc, curr) => acc + curr * curr, 0));
  const bMagnitude = Math.sqrt(b.reduce((acc, curr) => acc + curr * curr, 0));

  return dotProduct / (aMagnitude * bMagnitude);
};
