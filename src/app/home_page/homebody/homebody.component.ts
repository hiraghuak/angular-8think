import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ElementRef, Inject, Injectable, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

declare var $: any;


@Component({
  selector: 'app-homebody',
  templateUrl: './homebody.component.html',
  styleUrls: ['./homebody.component.css']
})
@Injectable()
export class HomebodyComponent implements OnInit {

  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  };













  constructor(private titleService: Title) { }
  @ViewChild('video') video: ElementRef;

  public ScrollMagic: any;
  public controller: any;

  ngOnInit(): void {
    this.titleService.setTitle('thinkAhoy');

    $('.count').each(() => {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 4000,
        easing: 'swing',
        step: (now) => {
          $(this).text(Math.ceil(now));
        }
      });
    });

  }

  BannerVidPlayPause = () => {
    const myVideo = $('#video');
    if (myVideo.get(0).muted) {
      myVideo.get(0).muted = false;
    } else {
      myVideo.get(0).muted = true;
    }
  }

}
