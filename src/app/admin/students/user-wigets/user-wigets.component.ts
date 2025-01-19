import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/service/auth.service";

@Component({
  selector: "app-user-wigets",
  templateUrl: "./user-wigets.component.html",
  styleUrls: ["./user-wigets.component.scss"],
})
export class UserWigetsComponent implements OnInit {
;
  allAccounts: any[] = [];

  constructor(private accountService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllAccounts();
    
  }




  getAllAccounts() {
    this.accountService.allStudents().subscribe(
        (res) => {
          this.allAccounts = res.data;
        },
        (err) => {
          console.log(err);
        }
      );
  }
}