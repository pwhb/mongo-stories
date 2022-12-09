import { writable } from "svelte/store";

export const zawgyi = writable(false)

export const showSearch = writable(false)

export const showSearchBar = writable(false)

export const searchTerm = writable("")

export const storiesStore = writable([])

export const filteredIndices = writable([])