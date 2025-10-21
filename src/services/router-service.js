import { createRouter, createWebHashHistory } from "vue-router";
import createRoutes from "@/_app/routes";
import modeService from "@/services/mode-service";
import { removeFirstPathSegment } from "@/utils/removeFirstPath";

/* 設定預設導入頁面 */
const options = {
  defaultPath: `/${modeService.mode}/home`,
};

/* 建立router */
const router = createRouter({
  //hash模式
  history: createWebHashHistory(import.meta.env.BASE_URL),
  //掛載處理好的routes
  routes: createRoutes(options),
  scrollBehavior() {
    /** 換頁捲軸回到上方 */
    return { top: 0 };
  },
});

const noVersionPaths = ["/404", "/:pathMatch(.*)*", "/"];

router.beforeEach(async (to, from, next) => {
  const mode = modeService.mode;
  const toPath = removeFirstPathSegment(to.path);
  const finalPath = `/${mode}${toPath}`;
  // console.log(`originPath: ${to.path}`);
  // console.log(`finalPath: ${finalPath}`);
  // console.log(`toPath: ${toPath}`);
  // console.log(`finalPath === to.path: ${finalPath === to.path}`);

  if (finalPath === to.path || noVersionPaths.includes(to.path)) next();
  else next(finalPath);
});

export default router;
