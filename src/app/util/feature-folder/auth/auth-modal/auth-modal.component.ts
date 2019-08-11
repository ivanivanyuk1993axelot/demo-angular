import {ChangeDetectionStrategy, Component, EventEmitter, Inject, Output} from '@angular/core';
import {CREDENTIALS_DATA_SOURCE} from '../../../../config/auth/credentials-data-source-injection-token';
import {CredentialsDataSourceInterface} from '../data-source/credentials-data-source-interface';
import {AUTH_DATA_SOURCE} from '../../../../config/auth/auth-data-source-injection-token';
import {AuthDataSourceInterface} from '../data-source/auth-data-source-interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-login-form',
  styleUrls: ['./auth-modal.component.scss'],
  templateUrl: './auth-modal.component.html',
})
export class AuthModalComponent<CredentialsType, AuthType> {
  @Output() loginButtonClickEvent = new EventEmitter();

  constructor(
    @Inject(AUTH_DATA_SOURCE) public authDataSource: AuthDataSourceInterface<CredentialsType, AuthType>,
    @Inject(CREDENTIALS_DATA_SOURCE) public credentialsDataSource: CredentialsDataSourceInterface,
  ) {
  }
}
