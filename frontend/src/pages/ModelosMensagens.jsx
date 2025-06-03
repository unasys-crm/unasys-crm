// frontend/src/pages/ModelosMensagens.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

function ModelosMensagens() {
  const [modelos, setModelos] = useState([]);
  const [grupo, setGrupo] = useState('');
  const [status, setStatus] = useState('');
  const [pagina, setPagina] = useState(1);
  const [limite, setLimite] = useState(10);

  const carregarModelos = async () => {
    try {
      const res = await axios.get('https://sua-api-no-render.com/modelos-mensagens', {
        params: { grupo, status, pagina, limite }
      });
      setModelos(res.data);
    } catch (error) {
      console.error('Erro ao buscar modelos:', error);
    }
  };

  useEffect(() => {
    carregarModelos();
  }, [grupo, status, pagina, limite]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Modelos de Mensagens</h1>

      <div className="flex gap-2 mb-4">
        <input
          placeholder="Grupo"
          value={grupo}
          onChange={e => setGrupo(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          placeholder="Status"
          value={status}
          onChange={e => setStatus(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={() => setPagina(1)} className="bg-blue-600 text-white px-4 rounded">
          Filtrar
        </button>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Grupo</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Mensagem</th>
          </tr>
        </thead>
        <tbody>
          {modelos.map((modelo) => (
            <tr key={modelo.id}>
              <td className="p-2 border">{modelo.id}</td>
              <td className="p-2 border">{modelo.grupo}</td>
              <td className="p-2 border">{modelo.status}</td>
              <td className="p-2 border">{modelo.mensagem}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button disabled={pagina <= 1} onClick={() => setPagina(p => p - 1)} className="px-4 py-1 bg-gray-300 rounded">Anterior</button>
        <span>Página {pagina}</span>
        <button onClick={() => setPagina(p => p + 1)} className="px-4 py-1 bg-gray-300 rounded">Próxima</button>
      </div>
    </div>
  );
}

export default ModelosMensagens;
