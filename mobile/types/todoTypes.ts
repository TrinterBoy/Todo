export default interface ITodo {
    _id?: string;
    title: string;
    description: string;
    year: number;
    public?: boolean;
    completed?: boolean;
}
export interface ITodoStrict{
    _id: string;
    title: string;
    description: string;
    year: number;
    public?: boolean;
    completed?: boolean;

}
