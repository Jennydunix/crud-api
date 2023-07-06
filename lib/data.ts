// using in memory data morre like a dummy data that resets after refresh.
type Post = {
    id: string,
    title: string,
    desc: string,
    date: Date,
}

let posts: Post[] = [];

// handlers: handles the data request
export const getPosts = () => posts; 

// add posts
export const addPost = (post: Post) => {
    posts.push(post);
} 

// delete post
export const deletePost = (id: string) => {
    posts = posts.filter((post)=> post.id!==id);
} 

// update post
export const updatePost = (id: string, title: string, desc:string) => {
    // to find the post
    const post = posts.find((post) => post.id === id);
    // what to do if you find the post
    if (post) {
        post.title = title;
        post.desc = desc;
    } else {
        throw new Error("NO POST FOUND!")
    }
} 

// get a post by its ID
export const getByID = (id:string) => {
    return posts.find((post) => post.id === id)
}
