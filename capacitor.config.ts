import type { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize } from '@capacitor/keyboard';

const config: CapacitorConfig = {
  appId: 'io.ionic.safeareascrollrepro',
  appName: 'safe-area-scroll-repro',
  webDir: 'www',
  plugins: {
    SystemBars: {
      insetsHandling: "disable",
    },
    Keyboard: {
      resize: KeyboardResize.Ionic,
    },
  },
};

export default config;
