import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { ProcessingService } from '../processing.service';

@Component({
  selector: 'app-template-and-instructions',
  templateUrl: './template-and-instructions.component.html',
  styleUrls: ['./template-and-instructions.component.sass']
})
export class TemplateAndInstructionsComponent implements OnInit {

  constructor(private service: ProcessingService,
    private snackbar: SnackbarService) { }
  loading: any;

  ngOnInit(): void {
  }

  downloadBulkTemplate() {
    this.service.templateDownload()
      .subscribe(
        (response) => {
          const a = document.createElement("a");
          document.body.appendChild(a);
          const blob: any = new Blob([response.data], {
            type: "octet/stream",
          });
          const url = window.URL.createObjectURL(blob);
          a.href = url;
          a.download = "bulkTemplate.xlsx";
          a.click();
          window.URL.revokeObjectURL(url);
          this.loading = false;
          this.snackbar.showNotification(
            "Template downloaded successfully!", "snackbar-success",
          );
        },
      )
  }
}
