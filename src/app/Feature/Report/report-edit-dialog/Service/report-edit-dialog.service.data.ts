import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class taskEditDialogService {
  constructor(private dialog: MatDialog) {}

  openDialog<T, D = any>(
    component: any,
    data?: D,
    width: string = '400px'
  ): Observable<T | undefined> {
    const dialogRef = this.dialog.open(component, {
      width,
      data,
    });

    return dialogRef.afterClosed();
  }
}
