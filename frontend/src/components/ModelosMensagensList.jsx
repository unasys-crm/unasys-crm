// src/components/ModelosMensagensList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ModelosMensagensList = () => {
  const [modelos, setModelos] = useState([]);
  const [grupo, setGrupo] = useState('');
  const [status, setStatus] = useState('');
  const [pagina, setPagina] = useState(1);

  const buscarModelos = async () => {
    try {
      const res = await axios.get('https://<SEU_BACKEND_RENDER>/modelos-mensagens', {
        params: {
          grupo,
          status,
          pagina,
        },
      });
      setModelos(res.data);
    } catch (error) {
      console.error('Erro ao buscar modelos:', error);
    }
  };

  useEffect(() => {
    buscarModelos();
  }, [pagina]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">📄 Modelos de Mensagens</h2>

      <div className="mb-4 flex gap-4">
        <input
          className="border p-2"
          placeholder="Filtrar por grupo"
          value={grupo}
          onChange={(e) => setGrupo(e.target.value)}
        />
        <input
          className="border p-2"
          placeholder="Filtrar por status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={buscarModelos}>
          Filtrar
        </button>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Grupo</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Mensagem</th>
          </tr>
        </thead>
        <tbody>
          {modelos.map((modelo) => (
            <tr key={modelo.id}>
              <td className="border p-2">{modelo.id}</td>
              <td className="border p-2">{modelo.grupo}</td>
              <td className="border p-2">{modelo.status}</td>
              <td className="border p-2">{modelo.mensagem}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-between">
        <button
          className="px-4 py-2 bg-gray-300 rounded"
          disabled={pagina === 1}
          onClick={() => setPagina(pagina - 1)}
        >
          Página anterior
        </button>
        <span>Página {pagina}</span>
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={() => setPagina(pagina + 1)}>
          Próxima página
        </button>
      </div>
    </div>
  );
};

export default ModelosMensagensList;
