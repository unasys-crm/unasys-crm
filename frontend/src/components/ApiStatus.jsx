import React, { useEffect, useState } from 'react';
import api from '@/services/api';

export default function ApiStatus() {
  const [status, setStatus] = useState('Verificando...');

  useEffect(() => {
    api.get('/')
      .then(res => {
        setStatus(`✅ API conectada: "${res.data}"`);
      })
      .catch(() => {
        setStatus('❌ Erro ao conectar com a API');
      });
  }, []);

  return (
    <div className="p-4 text-sm text-white bg-zinc-800 rounded shadow">
      {status}
    </div>
  );
}
