import { NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [],
  exports: [FooterComponent, HeaderComponent],
  declarations: [FooterComponent, HeaderComponent],
  providers: [],
})
export class UiModule {}
