import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'searchPosts'
})

export class SearchPipe implements PipeTransform {
    transform(posts: any, search = '') {
        if(!search.trim()) {
            return posts
        }

        return posts.filter((post: any) => {
            return post.title.toLowerCase().includes(search.toLowerCase())
        })
    }
}