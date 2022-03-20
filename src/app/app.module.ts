import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './admin/shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './admin/shared/auth.interceptor';
import { registerLocaleData } from '@angular/common';
import ruLocale from '@angular/common/locales/ru';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostComponent } from './shared/components/post/post.component';
import { QuillModule } from 'ngx-quill';

registerLocaleData(ruLocale, 'ru');

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    QuillModule.forRoot()
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
