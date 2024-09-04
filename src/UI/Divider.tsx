interface IProps {
  classes?: string;
}
const Divider: React.FC<IProps> = ({ classes }) => {
  return <div className={`border-t border-gray-300 my-4 ${classes} `}></div>;
};
export default Divider;
