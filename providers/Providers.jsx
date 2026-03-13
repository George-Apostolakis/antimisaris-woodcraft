'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
// import { AuthProvider } from '@/lib/AuthContext'; // Uncomment if using auth

export default function Providers({ children }) {
  return (
    // <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        {children}
      </QueryClientProvider>
    // </AuthProvider>
  );
}
