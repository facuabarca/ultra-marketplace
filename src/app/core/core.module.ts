import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ApiBridgeService } from './services/api-bridge.service';
import { appReducers } from './store/app.reducer';

@NgModule({
  imports: [HttpClientModule, StoreModule.forFeature('app', appReducers)],
  providers: [ApiBridgeService],
})
export class CoreModule {}
