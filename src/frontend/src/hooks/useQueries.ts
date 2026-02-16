// This file is intentionally minimal as the backend has no methods.
// All data is managed client-side in the categories.ts file.

import { useActor } from './useActor';

// Placeholder hook structure for future backend integration
export function useBackendData() {
  const { actor, isFetching } = useActor();
  
  // Currently no backend queries needed
  return {
    actor,
    isFetching,
  };
}
