import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserAdminComponent } from './components/user-admin/user-admin.component';
import { ImageAdminComponent } from './components/image-admin/image-admin.component';
import { NotPageFoundComponent } from './components/not-page-found/not-page-found.component';

const routes: Routes = [
  { path: "", component: UserAdminComponent },
  { path: "users", component: UserAdminComponent },
  { path: "images", component: ImageAdminComponent },
  { path: "**", component: NotPageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
