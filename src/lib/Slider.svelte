<script lang="ts">
    import { players, type Player } from "../types/player";

    export let player: Player;
    let points: number = 0;

    function handlePoints(action: string) {
        players.update((v) => {
            let index: number = v.findIndex((p) => p.name == player.name);
            v[index].actionPoints += action === 'add' ? points : - points;

            return v;
        })
    }
</script>

<div class="flex flex-row items-center gap-2">
    <div class="flex flex-row gap-2 justify-between w-4/12">
        <div class="bg-inherit flex-1">{player.name}</div>
        <div>{player.actionPoints}</div>
        <input class="w-10" type="number" bind:value={points}>
        <button class="flex-0 w-6 bg-slate-500 text-slate-900 disabled:opacity-75" 
            on:click={() => handlePoints('add')}>+</button>
        <button class="flex-0 w-6 bg-slate-500 text-slate-900 disabled:opacity-75" 
            on:click={() => handlePoints('sub')}>-</button>
    </div>
    <div class="bg-slate-600 rounded-md h-3 flex-1">
        <div class="h-full w-2 relative rounded-lg bg-black" style="left: {player.actionPoints}%;"></div>
    </div>
</div>