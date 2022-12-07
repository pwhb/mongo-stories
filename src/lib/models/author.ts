type ShinobiParams = {
    name: string, team: string, picture: string, village: string
}

export function Shinobi({ name, team, picture, village }: ShinobiParams) {
    this.name = name
    this.slug = name.toLowerCase().replace(/\s/g, "-")
    this.team = team
    this.picture = picture
    this.village = village
}

// const authorSchema: Schema = new Schema({
//     firstName: { type: String },
//     lastName: { type: String },
//     penName: { type: String },
//     intro: { type: String },
//     bio: { type: String },
//     slug: { type: String },
//     image: { type: String },
//     thumbnail: { type: String }
// })

// const Author = model("Author", authorSchema)

// export default Author