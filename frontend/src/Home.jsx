import ApiStatus from '@/components/ApiStatus';

export default function Home() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Bem-vindo ao Unasys CRM</h1>
      <ApiStatus />
    </div>
  );
}
