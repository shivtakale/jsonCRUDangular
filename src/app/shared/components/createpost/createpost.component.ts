import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ipost } from 'src/app/models/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss']
})
export class CreatepostComponent implements OnInit {
postForm: FormGroup ={} as FormGroup
allPost: Ipost[]=[]
  constructor(private postService:PostService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createPostForm();
  }

  createPostForm(){
    this.postForm = this.fb.group({
      title: ['',[Validators.required]],
      body: ['',[Validators.required]],
    })
  }

  createPost(){
    console.log(this.postForm.value);
    let userId =Math.floor(Math.random()*10)
    let obj ={
      userId: userId,
      ...this.postForm.value
    }
    console.log(obj);
    this.postService.createPost(obj)
      .subscribe(res=>{
        this.allPost.push(res);
       this.postForm.reset();
      })



  }
}
