import { FlexLayoutModule } from '@angular/flex-layout';
import { LogarComponent } from './components/login/compontents/logar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


  import {MatSnackBarModule} from '@angular/material/snack-bar';
  import {MatIconModule} from '@angular/material/icon';
  import {MatTooltipModule} from '@angular/material/tooltip';
  import {MatListModule} from '@angular/material/list';
  import {MatInputModule} from '@angular/material/input';
  import {MatButtonModule} from '@angular/material/button';

import { LoginService } from './components/login/services';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule
  ],
  
  declarations: [
    LoginComponent,
    LogarComponent
  ],
  providers: [
    LoginService
  ]

})
export class LoginModule { }
