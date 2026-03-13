import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.safeareascrollrepro',
  appName: 'safe-area-scroll-repro',
  webDir: 'www',
  plugins: {
    SystemBars: {
      insetsHandling: "disable",
    },
  },
};

export default config;
