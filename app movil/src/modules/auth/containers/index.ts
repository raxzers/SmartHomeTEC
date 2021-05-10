import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ClientLoginComponent} from './client-login/client-login.component';

export const containers = [LoginComponent, RegisterComponent, ForgotPasswordComponent,ClientLoginComponent];

export * from './login/login.component';
export * from './register/register.component';
export * from './forgot-password/forgot-password.component';
export * from './client-login/client-login.component';
