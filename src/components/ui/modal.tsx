export function Modal({ children, open, onClose }: any) {
  if (!open) return null;
  return (
    <div>
      <div onClick={onClose}>Close</div>
      {children}
    </div>
  );
}