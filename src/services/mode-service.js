import { ModeProvider } from "@/providers/mode-provider";
import storageService from "./storage-service";
import { ref } from "vue";

export class ModeService {
  constructor(mode) {
    const useMode = storageService.provider.get("mode") || mode;
    storageService.provider.set("mode", useMode);
    this.provider = new ModeProvider(useMode);
  }

  changeMode(mode) {
    this.provider.mode = mode;
    storageService.provider.set("mode", mode);
  }

  get mode() {
    return this.provider.mode;
  }
}

/** 搭配_app中的providers將mode引入全局元件中 */
ModeService.prototype.install = function install(app) {
  const provideName = "mode-service";
  const that = ref(this);
  app.config.globalProperties[provideName] = that.value;
  app.provide(provideName, that);
};

export default new ModeService("at");
