import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { IonicAlertService } from '../../services/ionic-alert.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  constructor(
    private ReqService: RequestService,
    private IonicAlert: IonicAlertService
    ) { }

  ngOnInit() {    
  }

  res200(){
    this.ReqService.res200()
      .then(res => {
        this.IonicAlert.presentAlert( 'OK: 200', res.msg)
      })
      .catch(err => {
        const title = `${err.statusText}: ${err.status}`
        const msg = `${err.error.msg}`
        this.IonicAlert.presentAlert(title, msg)
      })
  }
  res201(){
    this.ReqService.res201()
      .then(res => {
        this.IonicAlert.presentAlert( 'Created: 201', res.msg)
      })
      .catch(err => {
         const title = `${err.statusText}: ${err.status}`
        const msg = `${err.error.msg}`
        this.IonicAlert.presentAlert(title, msg)
      })
  }
  res301(){
    this.ReqService.res301()
      .then(res => {})
      .catch(err => {
        const title = `${err.statusText}: ${err.status}`
        const msg = `${err.error.msg}`
        this.IonicAlert.presentAlert(title, msg)
      })
  }
  res400(){
    this.ReqService.res400()
      .then(res => {})
      .catch(err => {
        const title = `${err.statusText}: ${err.status}`
        const msg = `${err.error.msg}`
        this.IonicAlert.presentAlert(title, msg)
      })
  }
  res404(){
    this.ReqService.res404()
      .then(res => {})
      .catch(err => {       
        const title = `${err.statusText}: ${err.status}`
        const msg = `${err.error.msg}`
        this.IonicAlert.presentAlert(title, msg)
      })
  }

  res418(){
    this.ReqService.res418()
      .then(res => {})
      .catch(err => {
        const title = `${err.statusText}: ${err.status}`
        const msg = `${err.error.msg}`
        this.IonicAlert.presentAlert(title, msg)
      })
  }
  res500(){
    this.ReqService.res500()
      .then(res => {})
      .catch(err => { 
        const title = `${err.statusText}: ${err.status}`
        const msg = `${err.error.msg}`
        this.IonicAlert.presentAlert(title, msg)
      })
  }

}
