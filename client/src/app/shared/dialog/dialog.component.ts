import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  pagamento: string = '1';
  ordine: any
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogComponent>, private service: GeneralService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.service.getOrdine(this.data.tavolo).subscribe((res: any) => {
      this.ordine = res
    })
  }

  inviaPagamento() {
    this.dialogRef.close()
    this.service.inviaPagamento(this.ordine, this.pagamento).subscribe((res: any) => {
    })
  }

}
