import { create } from "zustand";


interface UploadModalStore {
    isOpen: boolean;
    onOpen: () => void; // void functions
    onClose: () => void;
};


const useUploadModal = create<UploadModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useUploadModal;