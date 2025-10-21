import { mergeDeepRight } from "ramda";
//mergeDeepRight的功用是合併兩個obj,若有重複的值以第二個obj為主
import pages from "./pages";

const createRoutes = (opts) => {
  /* 預設導入頁 */
  const options = mergeDeepRight(
    {
      defaultPath: "/",
    },
    opts
  );

  const routes = [
    /** 預設會先加載一次 然後根據設定的defaultPath決定要前往的頁面 */
    {
      path: "/",
      name: "default-path",
      redirect: { name: options.defaultPath },
    },
    ...pages, // 通過在pages資料夾建立.vue檔就會自動新增
    {
      path: "/404",
      name: "not-found",
      meta: { layout: "layout-error" },
      component: { template: null },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-match",
      redirect: { name: "not-found" },
    },
  ];

  return routes;
};

export default createRoutes;
