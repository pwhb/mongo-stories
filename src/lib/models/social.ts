class Social {
    placement: number
    url: string
    icon: string
    name: string

    constructor({ placement, url, icon, name }: {
    placement: number,
    url: string,
    icon: string,
    name: string,
    }) {
        this.placement = placement;
        this.url = url;
        this.icon = icon;
        this.name = name; 
    }
}

export default Social
