export const Loader = () => {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-[99999] flex items-center justify-center"
    >
      <span className="absolute size-[8em] animate-loader rounded-full border-[1em] border-primary" />
      <span className="absolute size-[8em] animate-loader rounded-full border-[1em] border-primary opacity-0 [animation-delay:1s]" />
    </div>
  );
};
