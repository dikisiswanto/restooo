const serviceWorkerRegister = {
  async init() {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('./service-worker.js');
        // eslint-disable-next-line no-console
        console.log('Pendaftaran service worker berhasil...');
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log('Pendaftaran service worker gagal');
      }
    } else {
      // eslint-disable-next-line no-console
      console.log('Service worker tidak didukung');
    }
  },
};

export default serviceWorkerRegister;
