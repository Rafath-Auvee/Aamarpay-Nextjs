'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react';

const Success = () => {
  const searchParams = useSearchParams()
  const trxID = searchParams.get('trx_id') // Extracting trx_id from the query parameters

  return (
    <div>
      <h1>Success</h1>
      {trxID && <p>Transaction ID: {trxID}</p>}
    </div>
  );
};

export default Success;