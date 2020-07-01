import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TabViewModule} from 'primeng/tabview';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import {TabMenuModule} from 'primeng/tabmenu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DownloadThreadedComponent} from '../app/download-threaded/download-threaded.component';
import {DownloadTabComponent} from '../app/download-tab/download-tab.component';
import {SystemConnectionComponent} from '../app/system-connection/system-connection.component';
import {PanelModule} from 'primeng/panel';
import {
  FooterComponent,
  HeaderComponent,
  SharedModule
} from './shared';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent,DownloadThreadedComponent, DownloadTabComponent,SystemConnectionComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    TabMenuModule,
    PanelModule,
    HomeModule,
    ButtonModule,
    TabViewModule,
    DataViewModule,
    AuthModule,
    ProgressSpinnerModule,
    AppRoutingModule,
    SplitButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
