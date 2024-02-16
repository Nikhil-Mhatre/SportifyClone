import { create } from "zustand";

interface AuthModalProps {
  auth_type: string;
  isOpen: boolean;
  onOpen: (auth_type: string) => void;
  onClose: () => void;
}

const useAuthModal = create<AuthModalProps>((set) => ({
  isOpen: false,
  auth_type: "signin",
  onOpen: (auth_type) => set({ isOpen: true, auth_type }),
  onClose: () => set({ isOpen: false }),
}));

export default useAuthModal;
