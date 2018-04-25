export interface WorkHistory {
    company: string,
    location: string,
    title: string,
    descriptions: WorkDescription[],
    from: Date,
    to?: Date
}

export interface WorkDescription {
    summary: string,
    text: string[],
    snippet?: string,
}