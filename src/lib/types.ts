type project = {
    id: number,
    title: string,
    description: string,
    imgSource: string;
    imgAltText: string;
    tags: string[],
    links?: { name: string, url: string }[]
}

export type { project };
