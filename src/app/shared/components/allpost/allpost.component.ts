import { Component, OnInit } from '@angular/core';
import { Ipost } from 'src/app/models/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-allpost',
  templateUrl: './allpost.component.html',
  styleUrls: ['./allpost.component.scss']
})
export class AllpostComponent implements OnInit {
  postArray:Ipost[]=[];
  errMsg:string= '';
  constructor(private postservice:PostService) { }

  ngOnInit(): void {
    this.getAllPost()
  }
getAllPost(){
  this.postservice.getAllPost()
      .subscribe(res=>{
        this.postArray = res;
        console.log(res);
      },
      (err)=>{
        console.log(err?.message);
        this.errMsg = err.message;
      }
      )
}

}

