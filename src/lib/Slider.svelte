<script lang="ts">
    import { players, type Player } from "../types/player";
    import TiTrash from 'svelte-icons/ti/TiTrash.svelte'

    const max: number = 500;

    export let player: Player;
    let points: number = 0;

    function handlePoints(action: string) {
        players.update((v) => {
            let index: number = v.findIndex((p) => p.name == player.name);
            v[index].actionPoints += action === 'add' ? points : - points;

            points = 0;

            return v;
        })
    }

    const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

    function removePlayer() {
        players.update((v) => {
            return v.filter((p) => p.name != player.name);
        })
    }

    function calculatePercentage(points: number): number {
        return clamp((points/max) * 100, 0, 99);
    }
</script>

<div class="flex flex-row items-center gap-2">
    <div class="flex flex-row gap-2 justify-between w-4/12">
        <div class="bg-inherit flex-1">{player.name}</div>
        <div>{player.actionPoints}</div>
        <input class="w-10" type="number" bind:value={points}>
        <button class="flex-0 w-6 bg-slate-500 text-slate-900" 
            on:click|preventDefault={() => handlePoints('add')}>+</button>
        <button class="flex-0 w-6 bg-slate-500 text-slate-900" 
            on:click|preventDefault={() => handlePoints('sub')}>-</button>
        <button class="flex-0 w-6 bg-slate-500 text-slate-900" 
            on:click|preventDefault={() => { points = 5; handlePoints('add')}}>+5</button>
        <button class="flex-0 w-fit bg-slate-500 text-slate-900" 
            on:click|preventDefault={() => { points = 10; handlePoints('add')}}>+10</button>
    </div>
    <div class="bg-slate-600 rounded-md h-3 flex-1">
        <div class="h-full w-2 relative rounded-lg bg-black" style="left: {calculatePercentage(player.actionPoints)}%;"></div>
    </div>
    <button class="w-8" on:click|preventDefault={removePlayer}><TiTrash /></button>
</div>