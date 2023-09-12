import { create } from 'zustand';

interface LoadingOverlayStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useLoadingOverlay = create<LoadingOverlayStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useLoadingOverlay;