export interface IModal {
    item: any,
    closeModal: () => void
}
export interface INewsItem {
    author: string,
    content: string,
    description: string,
    publishedAt: string,
    source: {
        id: string,
        name: string,
    },
    title: string,
    url: string,
    urlToImage: string,
}
