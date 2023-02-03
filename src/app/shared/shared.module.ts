import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './components/alert/alert.component';
import { ErrorDirective } from './directives/error-input.directive';
import { SharedFacadeService } from './shared-facade.service';
@NgModule({
  imports: [CommonModule, RouterModule],
  providers: [SharedFacadeService],
  declarations: [
    FooterComponent,
    HeaderComponent,
    AlertComponent,
    ErrorDirective,
  ],
  exports: [FooterComponent, HeaderComponent, AlertComponent, ErrorDirective],
  // providers: [AppFacadeService],
})
export class SharedModule {}
