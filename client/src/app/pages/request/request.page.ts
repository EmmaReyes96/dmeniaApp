import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { IonicAlertService } from '../../services/ionic-alert.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  
  CodeForm = [
  {
    color: "success",
    status: "200",
    txt : "Res200"
  },
  {
    color: "success",
    status: "201",
    txt : "Res201"
  },
  {
    color: "tertiary tint",
    status: "301",
    txt : "Res301"
  },
  {
    color: "warning",
    status: "400",
    txt : "Res400"
  },
  {
    color: "warning",
    status: "404",
    txt : "Res404"
  },
  {
    color: "warning",
    status: "418",
    txt : "Res418"
  },
  {
    color: "danger",
    status: "500",
    txt : "Res500"
  },
]
  constructor(
    private ReqService: RequestService,
    private IonicAlert: IonicAlertService
    ) { }

  ngOnInit() {    
  }

  getCode(numeroDeCodigo){
    this.ReqService.getCode(numeroDeCodigo)
    .then(res => {
      this.IonicAlert.presentAlert(res['status'], res['msg'])
    })
    .catch(err => { 
      const title = `${err.statusText}: ${err.status}`
      const msg = `${err.error.msg}`
      this.IonicAlert.presentAlert(title, msg)
    })    
  }

}
