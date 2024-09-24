import "./InfoIndicators.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataLoad } from "../../redux/actions";

function InfoIndicators() {
  const data = useSelector((state) => {
    const { dataReducer } = state;
    return dataReducer.data;
  });

  const isNormal = useSelector((state) => {
    const { statusReducer } = state;
    return statusReducer.isNormal;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataLoad());
    const intervalData = setInterval(() => {
      dispatch(dataLoad());
    }, 60000);

    return () => clearInterval(intervalData);
  }, []);

  return (
    <section
      className={`info-indicators ${!isNormal && "info-indicators_exceed"}`}
    >
      <p className="info-indicators__data">{Number(data.temp).toFixed(1)} ℃</p>
      <p className="info-indicators__description">Температура</p>
      <p className="info-indicators__data">
        {Math.round(Number(data.co2))} ppm
      </p>
      <p className="info-indicators__description">CO2</p>
    </section>
  );
}

export default InfoIndicators;
