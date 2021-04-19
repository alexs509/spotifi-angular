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
  localMusics = [];
  currentAudio: HTMLAudioElement;
  searchMusic: string;

  constructor(
    private rest: RestService
  ) { }

  ngOnInit(): void {
    this.getMusic();
  }

  getMusic(): void {
    this.rest.getMusic().subscribe((resp : any) => {
      this.musics = resp;
      this.localMusics = resp;
    })
  }

  playEvent(action: string, id: number): void {
    if (action == 'pause') {
      this.currentAudio.pause();
      $(`.${id} .fa-play`).show();
      $(`.${id} .fa-pause`).hide();
      $(`.${id}.music-card`).removeClass('playing');
    } else {
      this.currentAudio = new Audio(this.musics[id -1].url);
      this.currentAudio.play();
      this.currentAudio.volume = 1;
      $(`.${id} .fa-pause`).show();
      $(`.${id} .fa-play`).hide();
      $(`.${id}.music-card`).addClass('playing');
    }
  }

  search(): void {
    this.localMusics = this.musics;
    if(this.searchMusic) {
      this.localMusics = this.localMusics.filter(d => {
        return (d.artist.toLowerCase()).includes(this.searchMusic.toLowerCase()) ||
        (d.name.toLowerCase()).includes(this.searchMusic.toLowerCase());
      })
  }
  }

}
