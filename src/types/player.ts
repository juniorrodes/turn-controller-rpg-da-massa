import { writable, type Writable } from "svelte/store";

export interface Player {
    name: string;
    actionPoints: number;
}

export const players: Writable<Player[]> = writable([])