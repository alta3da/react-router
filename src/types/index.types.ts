export interface IPostComment {
  "postId": number,
    "id": number,
    "name": string,
    "email": string,
    "body": string
}

export interface IPostDetails {
  body: string;
  id: number;
  title: string;
  userId: number;
}