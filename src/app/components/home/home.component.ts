import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest/rest.service';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  musics;
  currentAudio: HTMLAudioElement;

  constructor(
    private rest: RestService
  ) { }

  ngOnInit(): void {
    this.getMusic();
  }

  getMusic(): void {
    this.rest.getMusic().subscribe((resp) => {
      this.musics = resp;
    })
  }

  playEvent(action: string, id: number): void {
    //this.currentAudio.autoplay = true;
    if (action == 'pause') {
      this.currentAudio.pause();
      $(`.${id} .fa-play`).show();
      $(`.${id} .fa-pause`).hide();
      $(`.${id}.music-card`).removeClass('playing');
    } else {
      console.log(this.musics[id -1].audio)
      this.currentAudio = new Audio(this.musics[id -1].url);
      this.currentAudio.play();
      this.currentAudio.volume = 1;
      $(`.${id} .fa-pause`).show();
      $(`.${id} .fa-play`).hide();
      $(`.${id}.music-card`).addClass('playing');
    }
  }

}
