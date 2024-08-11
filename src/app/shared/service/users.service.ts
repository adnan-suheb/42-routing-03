import { Injectable } from '@angular/core';
import { Iuser } from '../model/users.interface';
import { usersData } from '../model/users.const';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private _router: Router,
    private _snackbar: SnackbarService,
    private _dialog: DialogService
  ) { }

  usersArr: Iuser[] = usersData;


  fetchAllUsers(): Observable<Iuser[]> {
    return of(this.usersArr)
  }

  getSingleUser(id: string): Observable<Iuser> {
    return of(this.usersArr.find(user => user.userId === id)!)
  }

  addNewUser(newObj: Iuser) {
    this.usersArr.push(newObj);
    this._snackbar.openSnackbar(`New User ${newObj.userName} added successfully!!!`)
    this._router.navigate(['/users']);

  }

  updateUser(updatedObj: Iuser) {
    let index = this.usersArr.findIndex(user => user.userId === updatedObj.userId)
    this.usersArr[index] = updatedObj;
    this._snackbar.openSnackbar(`${updatedObj.userName} updated successfully!!!`)
    this._router.navigate(['/users']);

  }

  removeUser(id: string) {
    let index = this.usersArr.findIndex(user => user.userId === id);
    let obj = this.usersArr[index];
    this._dialog.openDialog('Confirmation', `Are you sure, You want to delete ${obj.userName}? `)
      .subscribe(res => {
        if (res) {
          this.usersArr.splice(index, 1);
          this._snackbar.openSnackbar(`${obj.userName} removed successfully!!!`);
          this._router.navigate(['users'])
        }
      })
  }


}
