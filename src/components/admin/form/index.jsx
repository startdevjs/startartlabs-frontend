import { Form } from "./styles";

const FormComponent = ({ children, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return <Form onSubmit={handleSubmit}>{children}</Form>;
};

export default FormComponent;
