var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"appRoutes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"items","loadChildren":"./items/items.module#ItemsModule","children":[{"kind":"module","children":[{"name":"itemsRoutes","filename":"src/app/items/items-routing.module.ts","module":"ItemsRoutingModule","children":[{"path":"list","component":"ListItemsComponent"},{"path":"add","component":"AdditemComponent"}],"kind":"module"}],"module":"ItemsModule"}]},{"path":"","redirectTo":"/home","pathMatch":"full"}],"kind":"module"},{"name":"itemsRoutes","filename":"src/app/core/core-routing.module.ts","module":"CoreRoutingModule","children":[{"path":"home","component":"HomeComponent"},{"path":"**","component":"PageNotFoundComponent"}],"kind":"module"}]}
