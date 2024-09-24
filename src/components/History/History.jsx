import "./History.css";

function History() {
  const days = Math.round(Math.random() * 100);

  return (
    <section className="history">
      <p className="history__title">Дней без душноты {days}</p>
      <button className="history__button" type="button">
        <p className="history__button-text">История</p>
        <div className="history__button-image"></div>
      </button>
    </section>
  );
}

export default History;
