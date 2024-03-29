import { create } from 'zustand';
import { SidebarStore } from './types/SidebarType';

const useSidebar = create<SidebarStore>(set => ({
  isOpen: false,
  toggleSidebar: () => set(state => ({ isOpen: !state.isOpen }))
}));

export default useSidebar;
