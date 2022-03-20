import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { Post } from "./interfaces";

@Injectable({
    providedIn: 'root'
})

export class PostsService {

    constructor(private http: HttpClient) {}

    create(post: Post): Observable<Post> {
        return this.http.post<Post>(`${environment.firebaseDatabaseUrl}/posts.json`, post)
        .pipe(
            map(response => {
                const newPost: Post = {
                    ...post, 
                    id: response.name,
                    date: new Date(post.date)
                }
                return newPost
            })
        )
    }

    getPosts() {
        return this.http.get(`${environment.firebaseDatabaseUrl}/posts.json`)
        .pipe(
            // tap(_ => console.log(_)),
            map( (response: {[key: string]: any}) => {
                return Object.keys(response).map(key => ({
                    ...response[key],
                    id: key,
                    date: new Date(response[key].date)
                }))
            })
        )
    }

    remove(id: string): Observable<void> {
        return this.http.delete<void>(`${environment.firebaseDatabaseUrl}/posts/${id}.json`)
    }

    getById(id: string): Observable<Post> {
        return this.http.get<Post>(`${environment.firebaseDatabaseUrl}/posts/${id}.json`)
        .pipe(
            map(post => {
                return {
                    ...post, id,
                    date: new Date(post.date)
                }
            }))
    }

    update(post: Post): Observable<Post> {
        return this.http.patch<Post>(`${environment.firebaseDatabaseUrl}/posts/${post.id}.json`, post)
    }
}