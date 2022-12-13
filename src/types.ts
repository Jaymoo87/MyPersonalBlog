interface IBlog {
    id?: number;
    authorid: string;
    content: string;
    title: string;
    _created?: Date | string;
}


export default IBlog;