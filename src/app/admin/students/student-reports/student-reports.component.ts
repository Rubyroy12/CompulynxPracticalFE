import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { DatePipe } from '@angular/common';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-student-reports',
  templateUrl: './student-reports.component.html',
  styleUrl: './student-reports.component.scss'
})
export class StudentReportsComponent {
  loading = false;
  startDate: Date | null = null;
  endDate: Date | null = null;
  constructor(private studentService: StudentService,
    private datePipe: DatePipe
  ) { }

  onSubmit() {
    this.loading=true
    if (this.startDate && this.endDate) {
      // Format the dates to 'yyyy-MM-dd' format
      const formattedStartDate = this.datePipe.transform(this.startDate, 'yyyy-MM-dd');
      const formattedEndDate = this.datePipe.transform(this.endDate, 'yyyy-MM-dd');

      console.log('Formatted Start Date:', formattedStartDate);
      console.log('Formatted End Date:', formattedEndDate);

      // Call the service method to fetch the students within the DOB range
      this.studentService.exportStudentsByDOBRange(formattedStartDate, formattedEndDate).subscribe(
        (res: HttpResponse<Blob>) => {
          // Logic to handle file download
          const file = res.body;
          const fileName = 'Student_report.xlsx';
          
          // Create a URL for the Blob and trigger the download
          const blob = new Blob([file], { type: 'application/vnd.ms-excel' });
          const downloadLink = document.createElement('a');
          const url = window.URL.createObjectURL(blob);
          
          downloadLink.href = url;
          downloadLink.download = fileName;
          downloadLink.click();

          // Clean up the object URL
          window.URL.revokeObjectURL(url);
          this.loading=false
        },
        (error) => {
          console.error('Error exporting student data', error);
          this.loading=false
        }
        
      );
    } else {
      // Show a validation message if dates are missing
      console.warn('Please select both start and end dates');
    }
  }
}