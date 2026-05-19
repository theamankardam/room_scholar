export default function Btn({ className, children }) {
  return <button className={`${className} cursor-pointer`}>{children}</button>;
}
