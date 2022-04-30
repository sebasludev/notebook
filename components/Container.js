export default function Container({ children, className, ...props }) {
  return (
    <div className={`grid grid-cols-2 space-x-10 ${className}`} {...props}>
      {children}
    </div>
  );
}
