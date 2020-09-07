import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },


    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'contact',
      component:ContactComponent
    },

    {
      path:'about-us',
      component:AboutUsComponent
    },
    {
      path:"services",
      component:ServicesComponent
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
