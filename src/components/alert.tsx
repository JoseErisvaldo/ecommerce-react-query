export function Alert({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-red-200 text-red-800 p-4 rounded-md shadow-md">
      {children}
    </div>
  );
}

export function AlertTitle({ children }: { children: React.ReactNode }) {
  return <p className="font-bold mb-1">{children}</p>;
}

export function AlertDescription({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}
