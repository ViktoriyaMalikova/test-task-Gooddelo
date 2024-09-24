import "./StatusIndicators.css";
import { useSelector } from "react-redux";

function StatusIndicators() {
  const isNormal = useSelector((state) => {
    const { statusReducer } = state;
    return statusReducer.isNormal;
  });

  return (
    <section
      className={`status-indicators ${!isNormal && "status-indicators_exceed"}`}
    >
      {isNormal ? (
        <h2 className="status-indicators__title">Душнила доволен вами</h2>
      ) : (
        <h2 className="status-indicators__title">Душнила недоволен вами</h2>
      )}
      {isNormal ? (
        <p className="status-indicators__description">Все показатели в норме</p>
      ) : (
        <p className="status-indicators__description">CO2 превышает норму</p>
      )}
    </section>
  );
}

export default StatusIndicators;
