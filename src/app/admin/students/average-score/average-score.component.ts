import { Component } from '@angular/core';
import { StsService } from '../sts.service';

@Component({
  selector: 'app-average-score',
  templateUrl: './average-score.component.html',
  styleUrl: './average-score.component.scss'
})
export class AverageScoreComponent {
  averageScore: any;

   constructor( private stsService: StsService,) {}
  
    ngOnInit(): void {
      this.stsService.averageScore$.subscribe(score => {
        this.averageScore = score;
        console.info("Average",this.averageScore)
      });
    }

}
