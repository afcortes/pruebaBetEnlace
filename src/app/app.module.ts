import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CharacterComponent } from "./components/character/character.component";
import { HeaderComponent } from "./components/header/header.component";
import { ListCharactersComponent } from "./components/list-characters/list-characters.component";
import { AuthInterceptor } from "./service/interceptor";

@NgModule({
  declarations: [
    AppComponent,
    ListCharactersComponent,
    CharacterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
