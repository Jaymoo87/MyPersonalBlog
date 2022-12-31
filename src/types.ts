export interface IBlog {
    id?: number;
    authorid: number;
    content: string;
    title: string;
    _created?: Date | string;
    _updated?: Date | string;
   
}

export interface ITag {
    id?: number
    tagname: string
}

export interface  IJoinedBlog extends IBlog {
    tags: string[]
    authorname: string
}
