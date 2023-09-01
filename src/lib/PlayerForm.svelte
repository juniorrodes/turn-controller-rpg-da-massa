<script lang="ts">
    import { players, type Player } from "../types/player";
    let name: string;
    let actionPoints: number;

    let submitedValue: Player;

    function addPlayer(e: Event) {
        players.update(p => {
            p.push({ name, actionPoints });
            return p;
        });

        name = '';
        actionPoints = 0;
    }
</script>

<div class="flex flex-col gap-3">
    <form class="bg-slate-500 justify-center flex flex-col gap-2 rounded-sm" on:submit|preventDefault = {addPlayer}>
        <label class="flex gap-3">
            Character name
            <input class="text-slate-950 rounded-sm flex-1" placeholder="Character Name" bind:value={name}>
        </label>
        <label class="flex gap-3">
            Action points
            <input class="text-slate-950 rounded-sm flex-1" type="number" placeholder="Action points" bind:value={actionPoints}>
        </label>

        <button class="bg-slate-600 flex-1 rounded-sm">Add character</button>
    </form>

    <!-- <div class="flex gap-4 flex-row flex-1"> -->
    <!-- </div> -->
</div>