const files = import.meta.glob("../pages/**/*.vue");
const defaults = import.meta.glob("../pages/**/*.vue", { eager: true });
const modules = [];
for (let path in files) {
  /* 抓取路由 */
  const name = path.replace("../pages", "").toLowerCase().replace(".vue", "");
  let currentPath = name;
  /* /index => / */
  currentPath = currentPath.replace(/\/index$/, "");
  /* /_id => /:id  動態路由*/
  currentPath = currentPath.replace(/\/_+/g, "/:");
  // console.log(defaults[path].default);
  /* 上傳路由 */
  modules.push({
    path: currentPath, //路由
    name: currentPath, //路由名稱
    meta: {
      //頁面layout
      layout: defaults[path].default.layout || "layout-default",
      title: defaults[path].default?.title ?? "app.project.title",
      header: defaults[path].default?.header ?? "header-default",
      scroll: defaults[path].default?.noScroll ?? false,
      // inSidebar: defaults[path].default?.inSidebar ?? true, // 後續自動新增sidebar
    },
    component: files[path], //頁面component
  });
}

export default modules;
