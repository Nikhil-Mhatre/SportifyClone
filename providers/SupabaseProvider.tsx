"use client";

// This type likely defines the structure of the data being used
// with Supabase.
import { Database } from "@/types_db";

// This function is designed to help manage Supabase authentication
// in Next.js applications.
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// used to manage authentication state
// and provide a Supabase client to child components.
import { SessionContextProvider } from "@supabase/auth-helpers-react";

import { useState } from "react";

interface SupabaseProviderProps {
  children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
  // below function likely creates a new Supabase client instance
  // specifically for use within this React component.
  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>(),
  );

  return (
    // The SessionContextProvider makes the Supabase client instance
    //  and session information available to any child components within its context.
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;
