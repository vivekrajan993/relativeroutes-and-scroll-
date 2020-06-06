import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FooComponent } from './page/foo/foo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { BarComponent } from '@barcomponent';
import{NewComponent,NewService} from './new/shared';


const routes: Routes = [
  {
    path: 'foo',
    component: FooComponent
  },
  {
    path: 'bar',
    component: BarComponent
  },
  {
    path: '**',
    redirectTo: 'foo'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    RouterModule.forRoot(routes, {
     scrollPositionRestoration: 'top',
    // anchorScrolling: 'enabled',
    //scrollOffset: [0, 64] // [x, y],
      
    })
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
