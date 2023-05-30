import Button from "./Button.jsx";
import Input from "./Input.jsx";

const Form = () => {
  const arr =['Item 01', 'Item 02'];
  return (
    <div>
      <Input id="email" label="Email" type="text" />
      <Input id="password" label="Password" type="password"/>
      <Button item={arr} />
    </div>
  );
};

export default Form;