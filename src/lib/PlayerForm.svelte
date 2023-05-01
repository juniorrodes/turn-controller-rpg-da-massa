<script lang="ts">
    import { players } from "../types/player";
    let name: string;
    let actionPoints: number;

    let numberToAdd: number = 1;

    function addCharacter(e: Event) {
        players.update(p => {
            p.push({ name, actionPoints });
            name = '';
            actionPoints = null;
            return p;
        });
        e.preventDefault();
    }
</script>

<div class="flex flex-col gap-3">
    <form class="bg-slate-500 justify-center flex flex-col gap-2 rounded-sm">
        <div class="flex flex-row gap-2">
            <h1 class="flex-none">Character name</h1>
            <input class="text-slate-950 rounded-sm flex-1" placeholder="Character Name" bind:value={name}>
        </div>
        <div class="flex flex-row gap-2">
            <h1 class="flex-none">Action points</h1>
            <input class="text-slate-950 rounded-sm flex-1" type="number" placeholder="Action points" bind:value={actionPoints}>
        </div>
    </form>

    <div class="flex gap-4 flex-row flex-1">
        <button class="bg-slate-600 flex-1 rounded-sm" on:click={addCharacter}>Add character</button>
    </div>
</div>