export default function PageWrapper({ title, children }) {
  return (
    <div>
      <div className='border-b-4 border-white'>
        <h1 className='text-8xl pb-10'>{title}</h1>
      </div>
      {children}
    </div>
  );
}
