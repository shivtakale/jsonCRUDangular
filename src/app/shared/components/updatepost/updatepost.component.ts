import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-updatepost',
  templateUrl: './updatepost.component.html',
  styleUrls: ['./updatepost.component.scss']
})
export class UpdatepostComponent implements OnInit {
  postForm: FormGroup ={} as FormGroup;
  id!:number;
  constructor(private route:ActivatedRoute,
    private router:Router,
    private postservice:PostService,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.route.params
        .subscribe((params:Params)=>{
          console.log(params);
          this.id = +params['id'];
          this.postservice.getSinglePost(this.id)
              .subscribe(res=>{
                console.log(res);
              })
        })

        this.onEdit();
        this.createPostForm();
  }

  createPostForm(){
    this.postForm = this.fb.group({
      title: ['',[Validators.required]],
      body: ['',[Validators.required]],
    })
  }
  onEdit(){
    this.postservice.getSinglePost(this.id)
      .subscribe(res => {
        this.postForm.setValue({
          title: res.title,
          body : res.body
        })
      })
  }

  onUpdatPost(){
    let getId =+(localStorage.getItem('postId')!);
    this.postservice.updatePost(this.id, this.postForm.value)
        .subscribe(res=>{
          console.log(res);
        })
    this.router.navigate(['/'])
    this.postForm.reset();

  }

}
