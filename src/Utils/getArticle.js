export function getArticle(counter) {
  return fetch("https://dummyjson.com/posts/" + counter).then((res) =>
    res.json()
  );
}
