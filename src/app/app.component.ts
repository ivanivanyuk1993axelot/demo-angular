import * as logTypeWithUiPermissionDataProto from './model/proto/log-type/log-type-with-ui-permission-data_pb.js';
import {AuthService} from './util/core/auth/auth.service';
import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private _httpClient: HttpClient,
    public authService: AuthService,
  ) {
    _httpClient.
      get('http://localhost:8080/db-test?id=1', {responseType: 'arraybuffer'}).
      toPromise().
      then((data) => {
        console.log(data);
        console.log(logTypeWithUiPermissionDataProto.LogTypeWithUiPermissionData.deserializeBinary(data).toObject());
      });
  }
}
