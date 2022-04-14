import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { CatsComponent } from './components/cats/cats.component';
import { FreeAPIComponent } from './components/free-api/free-api.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes ,RouterModule, Route} from '@angular/router';


const appRoutes: Routes = [
  { path: 'free-api', component: FreeAPIComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'dogs', component: DogsComponent }
];

@NgModule ({
  declarations: [
    AppComponent,
    DogsComponent,
    CatsComponent,
    FreeAPIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

