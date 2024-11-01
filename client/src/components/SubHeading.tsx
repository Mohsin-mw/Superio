export default function SubHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center flex-col mb-10">
      {children}
    </div>
  );
}
