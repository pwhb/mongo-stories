class Song {
    thumbnail?: string
    artist: string
    title: string
    youtubeUrl: string
    audioUrl: string

    constructor({ thumbnail, artist, title, youtubeUrl, audioUrl }: {
        thumbnail?: string,
        artist: string,
        title: string,
        youtubeUrl: string,
        audioUrl: string
    }) {
        this.thumbnail = thumbnail;
        this.artist = artist;
        this.title = title;
        this.youtubeUrl = youtubeUrl;
        this.audioUrl = audioUrl;
    }
}

export default Song