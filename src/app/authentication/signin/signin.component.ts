import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/service/auth.service";
import { Role } from "src/app/core/models/role";
import { TokenStorageService } from "src/app/core/service/token-storage.service";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { ChangepasswordComponent } from "src/app/admin/users/changepassword/changepassword.component";
import { SnackbarService } from "src/app/shared/snackbar.service";
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent
  // extends UnsubscribeOnDestroyAdapter
  implements OnInit {
  authForm: FormGroup;
  submitted = false;
  loading = false;
  error = "";
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private snackbar: SnackbarService,
    // public dialogRef: MatDialogRef<ChangepasswordComponent>,
  ) {
    // super();
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  get f() {
    return this.authForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.error = "";
    console.log(this.authForm.value)
    if (this.authForm.invalid) {
      this.error = "Email and Password not valid !";
      return;
    } else {
      this.authService.login(this.authForm.value).subscribe(
        (res) => {
          console.log("Response ", res)
          this.loading = false;

          if (res.status == "SUCCESS") {

            console.log("Login Succesful! ", res.message)
            console.log("User role: ", res.data.roles[0])

             if (res.data.roles[0] == "ADMIN") {
            this.snackbar.showNotification("snackbar-success", "Login Successfull!");
             }else{
              this.snackbar.showNotification("snackbar-success", res.message);
             }

            // if (res.entity.firstlogin || !res.entity.passwordValid) {
            //   console.log("Firsttime login:", res.firstlogin)
              //redirect to change password
              

              // if (res.data.roles[0] == "ROLE_MAKER") {

              //   this.changePassword();

              //   // this.router.navigate(['/initiator/user/settings'])// /admin/users/settings
              // }
              // if (res.data.roles[0] == "ROLE_VERIFIER") {
              //   this.changePassword();

              //   // this.router.navigate(['/verifier/user/settings'])// /admin/users/settings
              // }

            // }
            this.tokenStorage.saveToken(res.data.token);
            this.tokenStorage.saveUser(res.data);
            const role = res.data.roles[0];
            if (role == Role.user) {
              this.router.navigate(['/admin/users'])
            }
            


            this.submitted = false;
          } else {
            this.submitted = false;
            this.snackbar.showNotification("snackbar-danger", res.message);
            console.log("Login Failed! ", res.status)
            console.log("Login message! ", res.message)
          }


        }), (error) => {
          this.loading = false;
          // Handle HTTP errors here
          this.snackbar.showNotification("snackbar-danger", "An error occurred. Please try again.");
          console.error("HTTP Error", error.message);
          this.submitted = false;
        
        }
        this.loading = false;
    }
  }
  changePassword() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = "70%"
//    private final JwtParser jwtParser;

//    public JwtServiceImpl() {
//        this.jwtParser = Jwts.parser().setSigningKey(jwtSigningKey);
//    }
    dialogConfig.data = {
      test: ""
    }
    this.dialog.open(ChangepasswordComponent, dialogConfig)
  }
  // close(){
  //   this.dialogRef.close()
  // }
}
