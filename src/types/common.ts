export interface ISessionContent {
    id: number;
    sessionId: string;
    updatedAt: string;
    createdAt: string;
    logoUrl: string,

}
export interface ISessionResponse {
    success: boolean;
    message: string;
    content: ISessionContent;
    colors: string[]
}