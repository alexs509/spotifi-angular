import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/Lecrae_-_Anomaly_(Lyric_Video).mp3');
  audio2 = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/Lecrae_-_Anomaly_(Lyric_Video).mp3');

  fakeMusic = [
    {id: 1, artist: 'Rohff', name: 'La puissance', time: '1min30', audio: 'assets/music/1.mp3', img:'http://generations.fr/media/articles/14254.jpg'},
    {id: 2, artist: 'Booba', name: 'Garde la pêche', time: '1min30', audio: 'assets/music/2.mp3', img: 'http://raprnbleblog.files.wordpress.com/2012/10/boobafutur.jpg'},
    {id: 3, artist: 'Celine Dion', name: 'Everywhere', time: '1min30', audio: 'assets/music/3.mp3', img: 'https://static.fnac-static.com/multimedia/FR/Images_Produits/FR/fnac.com/Visual_Principal_340/7/2/9/0886970811927/tsp20130902161724/S-il-suffisait-d-aimer-Version-Nomade.jpg'},
    {id: 4, artist: 'Rohff', name: 'Nothing', time: '1min30', audio: 'assets/music/3.mp3', img: 'https://images-na.ssl-images-amazon.com/images/I/41tn7EhHwbL._SY355_.jpg'},
    {id: 5, artist: 'DMX', name: 'How We Are', time: '1min30', audio: 'assets/music/1.mp3', img: 'https://www.abcdrduson.com/wp-content/uploads/2014/07/DMX-Its-Dark-and-hell-is-hot.jpg'},
  ]
  musicPlay: boolean = false;
  currentAudio: HTMLAudioElement;

  constructor() { }

  ngOnInit(): void {
  }

  playEvent(action: string, id: number): void {
    //this.currentAudio.volume = 0.1;
    //this.currentAudio.autoplay = true;
    if (action == 'pause') {
      this.currentAudio.pause();
      $(`.${id} .fa-play`).show();
      $(`.${id} .fa-pause`).hide();
      $(`.${id}.music-card`).removeClass('playing');
    } else {
      this.currentAudio = new Audio(this.fakeMusic[id-1].audio);
      this.currentAudio.play();
      $(`.${id} .fa-pause`).show();
      $(`.${id} .fa-play`).hide();
      $(`.${id}.music-card`).addClass('playing');
    }
  }

}
