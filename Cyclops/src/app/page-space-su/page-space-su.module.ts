import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageSpaceSuPageRoutingModule } from './page-space-su-routing.module';

import { PageSpaceSuPage } from './page-space-su.page';
import { ProgressIndicatorsComponent } from '../progress-indicators/progress-indicators.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageSpaceSuPageRoutingModule
  ],
  declarations: [PageSpaceSuPage, ProgressIndicatorsComponent]
})
export class PageSpaceSuPageModule {}
