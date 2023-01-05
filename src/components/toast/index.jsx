import { Main, Body } from "./styles";

const ToastComponent = ({ message, close, variant }) => {
  setTimeout(() => {
    close();
  }, 3000);
  return (
    <Main>
      <Body>
        <div class={`toast toast--${variant}`}>
          <p>{message}</p>
        </div>
      </Body>
    </Main>
  );
};

export default ToastComponent;
