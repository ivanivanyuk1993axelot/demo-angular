import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AuthService} from '../auth-modal/auth.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-auth-menu',
  styleUrls: ['./auth-menu.component.scss'],
  templateUrl: './auth-menu.component.html',
})
export class AuthMenuComponent<CredentialsType, AuthType> {
  constructor(
    public authService: AuthService<CredentialsType, AuthType>,
  ) {
  }
}
