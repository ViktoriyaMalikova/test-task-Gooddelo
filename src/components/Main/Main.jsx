import "./Main.css";
import StatusIndicators from "../StatusIndicators/StatusIndicators";
import InfoIndicators from "../InfoIndicators/InfoIndicators";
import History from "../History/History";
import Logo from "../Logo/Logo";

function Main() {
  return (
    <main className="content">
      <StatusIndicators />
      <InfoIndicators />
      <History />
      <Logo />
    </main>
  );
}

export default Main;
