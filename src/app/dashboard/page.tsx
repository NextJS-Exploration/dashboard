export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded-xl p-6">Card 1</div>
        <div className="bg-white shadow rounded-xl p-6">Card 2</div>
        <div className="bg-white shadow rounded-xl p-6">Card 3</div>
      </div>
    </div>
  );
}
