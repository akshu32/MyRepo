import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
       <button (click)="inclikes()" class="like-button {{like_c}}">Like | <span class="likes-counter">{{initialCount}}</span></button>
    `,
    styles: [`
        .like-button {
            font-size: 1rem;
            padding: 5px 10px;
            color:  #585858;
        }

        .liked {
            font-weight: bold;
            color: #1565c0;
        }
    `]
})

export class AppComponent {
    public initialCount = 100;
    like_c:string ="";
    
    inclikes(){
        if(this.like_c=="liked")
        {
           this.initialCount-=1;
           this.like_c="";
        }
        else
        {
            this.initialCount+=1;
            this.like_c="liked";
        }
    }
}