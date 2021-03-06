import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UsersComponent } from './components/users/users.component';
import { FormsModule } from '@angular/forms';
import { GraphComponent } from './components/pages/graph/graph.component';
import { LanguagesdataComponent } from './components/languagesdata/languagesdata.component';

// DevExtreme Modules:
import { DxPolarChartModule } from 'devextreme-angular';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AddUserComponent,
    UsersComponent,
    GraphComponent,
    LanguagesdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DxPolarChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
