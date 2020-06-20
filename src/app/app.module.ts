import { Articlesrvice } from './service/articleservice.service';
import { ChatModule } from './chat/chat.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FheaderComponent } from './home/fheader/fheader.component';
import { AssistantComponent } from './assistant/assistant.component';
import { ArticlesComponent } from './articles/articles.component';
import { InterfaceComponent } from './interface/interface.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    FheaderComponent,
    AssistantComponent,
    ArticlesComponent,
    InterfaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModule,
    HttpClientModule
  ],
  providers: [Articlesrvice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
