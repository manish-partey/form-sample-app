import {Component} from "@angular/core"
@Component ({
selector:'app-post-create',
  templateUrl:'./post-create.component.html'
}

)
export class PostCreateComponent{
  newPost : string ='No Content!';
  enteredValue : string='';
  onAddPost() :void{
    this.newPost=this.enteredValue;
  }
}
