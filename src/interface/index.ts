export interface people {
    avatar: string,
    name: string,
    position: string,
    city: string,
    company: string,
    createdDate: string,
    id: bigint,
    isContact: boolean,
    isFavorite: boolean,
    social_networks: social_networks
}

export interface social_networks {
    facebook: string,
    instagram: string,
    twitter: string,
    youtube: string
}