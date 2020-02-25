import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-jquery',
  templateUrl: './jquery.component.html',
  styleUrls: ['./jquery.component.css']
})
export class JqueryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function () {
      alert('I am Called From jQuery');
    });

  }

}
