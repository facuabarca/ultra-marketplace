import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducers } from './store/user.reducer';
import { UserEffects } from './store/user.effects';
import { UserDataService } from './services/user-data.service';

@NgModule({
  imports: [
    StoreModule.forFeature('user', userReducers),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [UserDataService],
})
export class UserModule {}
