function Articles({ title, description }) {
  function ArtikleKlik() {
    alert("artikel di pencet");
  }

  function TombolKlik(event) {
    event.preventDefault();
    event.stopPropagation();
    alert("tombol di pencet");
  }

  return (
    <article onClick={ArtikleKlik}>
      <h3>{title}</h3>
      <p>{description}</p>
      <form>
        <button type="submit" onClick={TombolKlik}>
          Submit
        </button>
      </form>
    </article>
  );
}

export default Articles;
