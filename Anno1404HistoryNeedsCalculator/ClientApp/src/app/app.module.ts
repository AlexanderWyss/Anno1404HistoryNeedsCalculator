import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {HomeComponent} from './home/home.component';
import {PopulationInfoComponent} from './population-info/population-info.component';
import {ProductionChainComponent} from './production-chain/production-chain.component';
import {ResourceImgComponent} from './resource-img/resource-img.component';
import {LayoutComponent} from './layout/layout.component';
import {ProductionChainsOverviewComponent} from './production-chains-overview/production-chains-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PopulationInfoComponent,
    ProductionChainComponent,
    ResourceImgComponent,
    LayoutComponent,
    ProductionChainsOverviewComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'production-chain', component: ProductionChainsOverviewComponent, pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
