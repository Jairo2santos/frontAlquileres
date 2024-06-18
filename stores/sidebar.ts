import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    isExpanded: false,
    isMobile: false,
    isMobileExpanded: false,
  }),
  actions: {
    toggleNavbar() {
      this.isExpanded = !this.isExpanded;
      if (!this.isExpanded) {
        this.isMobileExpanded = false;
      }
    },
    toggleMobileNavbar() {
      this.isMobileExpanded = !this.isMobileExpanded;
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    }
  }
});
