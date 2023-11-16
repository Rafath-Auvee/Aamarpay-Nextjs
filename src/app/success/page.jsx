'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react';

const Success = () => {
  const searchParams = useSearchParams()
  const trx_id = searchParams.get('trx_id') // Extracting trx_id from the query parameters

  return (
    <div>
      <h1>Success</h1>
      {trx_id && <p>Transaction ID: {trx_id}</p>}
    </div>
  );
};

export default Success;