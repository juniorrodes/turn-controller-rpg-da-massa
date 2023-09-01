import { writable, type Writable } from "svelte/store";

const localState = localStorage.getItem('state');

export interface Player {
    name: string;
    actionPoints: number;
}

export const players: Writable<Player[]> = writable(localState ? JSON.parse(localState) : []);