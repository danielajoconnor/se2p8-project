export default function Content({children,className}) {
  return <div className={`w-full max-w-screen-2xl mx-auto ${className}`}>{children}</div>;
}
