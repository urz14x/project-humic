interface IButton {
  children: React.ReactNode | string;
  className: string;
}
const ButtonPrimary = ({ children, className }: IButton) => {
  return (
    <button className={className}>
      <span>{children}</span>
    </button>
  );
};
export default ButtonPrimary;
